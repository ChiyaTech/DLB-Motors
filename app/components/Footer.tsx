"use client";
import { FiInstagram, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] py-10 px-6 border-t border-white/5 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
        
        {/* Left Side: Brand & Identity */}
        <div className="text-center md:text-left group cursor-default">
          <h3 className="text-white font-black italic text-xl md:text-2xl tracking-tighter uppercase mb-1">
            DLB <span className="text-dlb-accent transition-colors duration-500 group-hover:text-white">MOTORS</span>
          </h3>
          <p className="text-zinc-600 text-[9px] font-bold tracking-[0.3em] uppercase">
            Panchyawala, Sirsi Road, Jaipur
          </p>
        </div>

        {/* Middle: Social Link - Action Center */}
        <div className="flex flex-col items-center gap-3">
          <a 
            href="https://www.instagram.com/dlb_motors_jaipur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-dlb-accent hover:border-dlb-accent transition-all duration-500 cursor-pointer shadow-lg"
          >
            <FiInstagram className="text-white group-hover:text-black transition-colors" />
            <span className="text-zinc-400 group-hover:text-black font-black text-[9px] uppercase tracking-widest transition-colors">
              @dlb_motors_jaipur
            </span>
          </a>
          <p className="text-zinc-800 text-[8px] font-black uppercase tracking-[0.4em] animate-pulse">
            Follow for daily updates
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 border border-white/5 rounded-full text-zinc-500 hover:text-dlb-accent hover:border-dlb-accent transition-all cursor-pointer shadow-xl active:scale-90 group"
          >
            <FiArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          <p className="text-zinc-700 text-[8px] font-bold tracking-[0.3em] uppercase">
            © 2026 DLB MOTORS. <span className="hidden md:inline border-l border-white/10 ml-2 pl-2">CRAFTED IN JAIPUR.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}