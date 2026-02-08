"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiSettings, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  // Starting with "none" to ensure zero blur on load
  const imageBlur = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(4px)"]); 
  const contentY = useTransform(scrollYProgress, [0.1, 0.5], [80, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const oldNumber = "919983613302";
  const heroMsg = encodeURIComponent("Hello DLB Motors! Mujhe car enquiry karni hai.");

  return (
    <div id="home" ref={containerRef} className="bg-[#050505] relative h-[170vh] font-sans">
      <section className="sticky top-0 h-screen w-full flex items-center justify-center px-4 md:px-6 overflow-hidden">
        
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-[80%_center] sm:bg-[55%_center] md:bg-center"
          style={{ 
            backgroundImage: "url('/banner_1.jpg')", 
            filter: imageBlur, 
            opacity: imageOpacity 
          }}
        />
        
        <div className="absolute inset-0 z-[1] bg-black/40" />

        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }} 
          className="relative z-10 w-full max-w-5xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-dlb-accent font-mono tracking-[0.3em] mb-6 text-[9px] uppercase bg-dlb-accent/10 px-4 py-1 rounded-full border border-dlb-accent/20">
              Est. 2011 // Performance Studio
            </span>
            <h1 className="text-[13vw] md:text-[10vw] leading-[0.8] font-[1000] italic uppercase tracking-tighter text-white">
               DLB <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>MOTORS</span>
            </h1>
            <p className="text-zinc-400 text-xs md:text-lg max-w-2xl mt-10 leading-relaxed font-medium px-4 md:px-0">
              Experience the pinnacle of automotive care. Tuning ho ya detailing, 
              <span className="text-white font-bold"> DLB Motors</span> laata hai precision engineering aapki car ke liye.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-14">
            <div className="grid grid-cols-2 gap-6">
               <Feature icon={<FiSettings />} text="Expert Tuning" />
               <Feature icon={<FiCheckCircle />} text="Genuine Parts" />
            </div>
            <a 
              href={`https://wa.me/${oldNumber}?text=${heroMsg}`}
              target="_blank"
              className="group bg-white text-black font-black px-8 md:px-10 py-4 md:py-5 flex items-center gap-4 hover:bg-[#25D366] hover:text-white transition-all duration-500 italic uppercase shadow-xl text-xs md:text-sm cursor-pointer"
            >
              <FaWhatsapp className="text-xl md:text-2xl" /> Book Appointment
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const Feature = ({ icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 text-[8px] md:text-xs font-bold tracking-[0.2em] text-white/80 uppercase italic">
    <span className="text-dlb-accent text-xl">{icon}</span> {text}
  </div>
);