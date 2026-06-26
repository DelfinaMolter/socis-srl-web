import { Resend } from "resend";

type ContactForm = {
  fullName: string;
  email: string;
  company: string;
  website?: string;
  phone: string;
  subject: string;
  message?: string;
  recaptchaToken: string;
  siteURL: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const data = await response.json();
    const hasScore = typeof data.score !== "undefined";
    const scoreValid = hasScore ? data.score > 0.5 : true;

    if (!data.success) {
      console.warn("reCAPTCHA siteverify response:", data);
    }

    return data.success && scoreValid;
  } catch (error) {
    console.error("Error verificando reCAPTCHA:", error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    // Validar que RESEND_API_KEY y RECAPTCHA_SECRET_KEY estén configuradas
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return Response.json(
        { success: false, error: "RESEND_API_KEY no configurada" },
        { status: 500 },
      );
    }

    if (!RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY no está configurada");
      return Response.json(
        { success: false, error: "RECAPTCHA_SECRET_KEY no configurada" },
        { status: 500 },
      );
    }

    const body: ContactForm = await req.json();

    // Validar campos requeridos
    if (
      !body.fullName ||
      !body.email ||
      !body.company ||
      !body.phone ||
      !body.subject
    ) {
      return Response.json(
        { success: false, error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    // Validar reCAPTCHA
    if (!body.recaptchaToken) {
      return Response.json(
        { success: false, error: "Validación reCAPTCHA requerida" },
        { status: 400 },
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(body.recaptchaToken);
    if (!isValidRecaptcha) {
      console.warn("reCAPTCHA inválido o puntuación baja para:", body.email);
      return Response.json(
        { success: false, error: "Validación de seguridad fallida" },
        { status: 403 },
      );
    }

    // Enviar email al admin
    const adminEmailResult = await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      //from: "Web <info+contacto@socis.com.ar>",
      to: `info${body.siteURL}@socis.com.ar`,
      subject: `Nueva consulta: ${body.subject}`,
      html: `
    <h2>Nueva consulta desde la web</h2>

    <p><strong>Nombre:</strong> ${body.fullName}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Empresa:</strong> ${body.company}</p>
    <p><strong>Web:</strong> ${body.website || "No proporcionado"}</p>
    <p><strong>Teléfono:</strong> ${body.phone}</p>
    <p><strong>Interés:</strong> ${body.subject}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${body.message || "Sin mensaje"}</p>
  `,
    });

    if (adminEmailResult.error) {
      console.error("Error enviando email al admin:", adminEmailResult.error);
      return Response.json(
        {
          success: false,
          error: `Error al enviar el email: ${adminEmailResult.error.message} (${adminEmailResult.error.name})`,
        },
        { status: 500 },
      );
    }

    // Enviar confirmación al usuario
    const userEmailResult = await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      //from: "Socis <info+contacto@socis.com.ar>",
      to: body.email,
      subject: "Recibimos tu consulta",
      html: `
    <h2>Gracias por contactarte con SOCIS</h2>
    <p>Recibimos tu consulta y te responderemos a la brevedad.</p>
    <p>Un especialista analizará tu situación y se comunicará contigo pronto.</p>
  `,
    });

    if (userEmailResult.error) {
      console.warn(
        "Error enviando confirmación al usuario:",
        userEmailResult.error,
      );
      // No fallar aquí, el email admin se envió correctamente
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error en endpoint de contacto:", error);
    return Response.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
