
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call
      // using process.env.API_KEY directly as per SDK guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `Eres "Socio", el consultor virtual experto de SOCIS Consultores (Argentina). 
          Tu expertise es en:
          - Sistemas de Gestión de Calidad (Normas ISO 9001, 14001, 27001, 17025, 45001).
          - Ley de Economía del Conocimiento (Ley 27.506) y Ley de Promoción de Software.
          - Mejora de Procesos y Formación de Personal directivo.
          
          Tu tono es: Altamente profesional, confiable, ejecutivo y servicial. 
          
          Reglas:
          1. Si preguntan por certificaciones, explica que Socis acompaña en todo el proceso hasta la auditoría final.
          2. Si preguntan por la Ley de Economía del Conocimiento, resalta los beneficios fiscales y la asistencia en la presentación de la solicitud.
          3. Menciona que Socis tiene más de 15 años de trayectoria y 300+ clientes.
          4. No des precios fijos, invita a dejar una consulta en el formulario de contacto o llamar al (54 911) 4447-8802.
          5. Mantén respuestas concisas y en español rioplatense pero formal (voseo profesional).`,
        }
      });

      const botText = response.text || "Disculpe, ocurrió un error en la conexión. Puede contactarnos directamente al (54 911) 4447-8802.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, no pude procesar su consulta. Por favor, intente de nuevo o contáctenos por los canales tradicionales." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
          <Sparkles className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[420px] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold leading-none mb-1">Consultor Socio</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Especialista ISO
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl mb-4 text-sm font-medium">
                  Bienvenido a SOCIS Consultores. ¿Cómo puedo asesorarlo hoy sobre normas ISO o beneficios de la Ley de Economía del Conocimiento?
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  <span className="text-xs text-slate-400 font-medium">Analizando normativa...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Su consulta técnica..."
                className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/30"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
