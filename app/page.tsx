"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  const [expandedSection, setExpandedSection] = useState<
    "none" | "iso" | "knowledge"
  >("none");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;

      if (hash === "#lec") {
        setExpandedSection("knowledge");
        setPendingScroll("lec");
      } else if (hash === "#normasiso") {
        setExpandedSection("iso");
        setPendingScroll("normasiso");
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    if (hash === "lec") {
      setExpandedSection("knowledge");
    }

    if (hash === "normasiso") {
      setExpandedSection("iso");
    }

    setPendingScroll(hash);
  }, []);
  const navigateToSection = (id: string, section?: "iso" | "knowledge") => {
    // actualiza la URL
    window.history.replaceState(null, "", `#${id}`);

    if (section) {
      setExpandedSection(section);
    } else {
      setExpandedSection("none");
    }

    setPendingScroll(id);
  };

  useEffect(() => {
    if (!pendingScroll) return;

    const timer = setTimeout(() => {
      document.getElementById(pendingScroll)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setPendingScroll(null);
    }, 750);

    return () => clearTimeout(timer);
  }, [expandedSection, pendingScroll]);

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} navigateToSection={navigateToSection} />

      <main className="overflow-x-hidden">
        <section id="inicio">
          <Hero
            expandedSection={expandedSection}
            setExpandedSection={setExpandedSection}
          />
        </section>

        <section
          id="nosotros"
          className="py-24 md:py-36 bg-slate-50 overflow-hidden"
        >
          <About />
        </section>

        <section id="process" className="py-24 md:py-36 bg-white">
          <Process />
        </section>

        <Stats />

        <section>
          <Experience />
        </section>
        <section
          id="faq"
          className="py-24 md:py-36 bg-slate-50 border-t border-slate-100"
        >
          <FAQ />
        </section>
        <section
          id="contactos"
          className="py-24 md:py-36 bg-white overflow-hidden"
        >
          <Contact siteUrl="inicio" />
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
