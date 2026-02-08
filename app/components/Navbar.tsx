"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Location", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex justify-between items-center relative">
        
        {/* LEFT: Logo & Brand */}
        <div 
          className="flex items-center gap-2 cursor-pointer shrink-0" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <Image src="/dlb.png" alt="Logo" width={28} height={28} className="md:w-[35px]" />
          <span className="text-[14px] md:text-xl font-[1000] italic text-white uppercase tracking-tighter leading-none">
            DLB <span className="text-dlb-accent">MOTORS</span>
          </span>
        </div>

        {/* CENTER: 24/7 Helpline (Mobile & Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center whitespace-nowrap">
          <a 
            href="tel:+919983613302" 
            className="flex items-center gap-1.5 text-[7px] md:text-[9px] font-bold text-red-500 animate-pulse border border-red-500/20 px-2 md:px-3 py-1.5 rounded-full bg-red-500/5 uppercase tracking-[0.15em]"
          >
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 bg-red-500 rounded-full"></span>
            24/7 <span className="hidden xs:inline">Helpline</span>
          </a>
        </div>

        {/* RIGHT: Desktop Links & Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-all">{link.name}</a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:block bg-white text-black text-[10px] font-black px-6 py-2.5 rounded-sm hover:bg-dlb-accent transition-all italic uppercase">
            Contact Us
          </a>

          {/* Hamburger Trigger */}
          <button 
            className="lg:hidden text-white text-2xl cursor-pointer p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm font-black italic uppercase tracking-widest text-zinc-400 hover:text-dlb-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-black italic uppercase text-dlb-accent border-t border-white/5 pt-6"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}