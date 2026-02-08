"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiX } from "react-icons/fi";

export default function FloatingCall() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: "Enquiry & Service", num: "+919983613302" },
    { name: "Pick-up & Drop", num: "+919784212903" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[150] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 flex flex-col gap-3 items-end"
          >
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={`tel:${contact.num}`}
                className="bg-white text-black px-6 py-3 rounded-full shadow-2xl flex flex-col items-end border border-zinc-200 group hover:bg-dlb-accent transition-all"
              >
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-black/60">
                  {contact.name}
                </span>
                <span className="text-sm font-black italic">{contact.num}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer ${
          isOpen ? "bg-zinc-900 text-white rotate-90" : "bg-dlb-accent text-black scale-110"
        }`}
      >
        {isOpen ? <FiX size={28} /> : <FiPhone size={28} className="animate-bounce" />}
      </button>
    </div>
  );
}