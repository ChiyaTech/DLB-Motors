"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiTarget, FiTruck, FiPhone, FiDroplet, FiZap, 
  FiActivity, FiShield, FiX, FiSend, 
  FiMapPin, FiTool, FiFileText 
} from "react-icons/fi";

export default function WorkGallery() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ phone: "", location: "", problem: "" });

  const newNumber = "919784212903";

  const handleSend = () => {
    const message = `*DLB MOTORS - Pick-up Request*%0A%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location}%0A*Problem:* ${formData.problem}`;
    window.open(`https://wa.me/${newNumber}?text=${message}`, "_blank");
    setShowModal(false);
  };

  const allServices = [
    { icon: <FiActivity />, title: "Wheel Alignment", desc: "Computerized precision." },
    { icon: <FiDroplet />, title: "Premium Washing", desc: "Foam & Deep clean." },
    { icon: <FiZap />, title: "Performance Tuning", desc: "Stage 1-3 remaps." },
    { icon: <FiTarget />, title: "Engine Repair", desc: "Detailed mechanical fix." },
    { icon: <FiShield />, title: "Denting & Painting", desc: "Showroom finish paint." },
    { icon: <FiFileText />, title: "Insurance Claim", desc: "Hassle-free processing." },
  ];

  const images = [
    { src: "/banner_2.jpg", title: "Precision Foam Wash", desc: "Deep cleaning excellence.", size: "md:col-span-2" },
    { src: "/banner_3.jpg", title: "Diagnostics", desc: "Expert technical analysis.", size: "md:col-span-1" },
    { src: "/banner_4.jpg", title: "Elite Detailing", desc: "Restoring showroom shine.", size: "md:col-span-1" },
    { src: "/banner_5.jpg", title: "Mechanical", desc: "Power & Excellence.", size: "md:col-span-2" },
  ];

  return (
    <section id="services" className="bg-[#050505] py-16 px-6 overflow-x-hidden relative text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SERVICES GRID --- */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-dlb-accent font-mono text-[10px] tracking-[0.5em] uppercase block mb-3 font-bold"
          >
            Total Care Solutions
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-[1000] italic uppercase leading-none">
            Our <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>Services</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 text-center">
            {allServices.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/30 border border-white/5 p-5 rounded-sm flex flex-col items-center hover:border-dlb-accent/60 transition-all cursor-pointer group"
              >
                <div className="text-dlb-accent text-2xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h4 className="font-black text-[9px] md:text-xs uppercase italic tracking-tighter text-white">{service.title}</h4>
                <p className="text-zinc-500 text-[7px] mt-2 uppercase tracking-widest leading-tight">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PICK-UP BANNER --- */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="mb-20 relative group overflow-hidden rounded-sm border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-dlb-accent/30 z-0" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-block bg-dlb-accent text-black text-[8px] font-black tracking-[0.4em] uppercase px-3 py-1 mb-4 rounded-full">
                Logistics Made Simple
              </span>
              <h3 className="text-3xl md:text-6xl font-[1000] uppercase leading-[0.9] italic text-white mb-4">
                Ghar Se Pick-up, <br/> 
                <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>Ghar Par Drop.</span>
              </h3>
              <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs">
                Dedicated team for hassle-free pick-up and delivery across Jaipur.
              </p>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white hover:bg-dlb-accent text-black hover:text-white font-[1000] px-10 py-5 text-xs uppercase italic transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer"
            >
              Request Home Pick-up
            </button>
          </div>
        </motion.div>

        {/* --- BENTO GALLERY (Hover Fixed) --- */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-6xl font-[1000] italic uppercase leading-none mb-10">
             Workshop <span className="text-dlb-accent">Glimpse</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[380px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className={`relative group overflow-hidden border border-white/5 bg-zinc-900 rounded-sm cursor-pointer ${img.size}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                {/* Darker Gradient for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity" />
                
                {/* Content with Slide-up Animation */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="text-dlb-accent font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-all">
                      DLB Lab // 0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-[1000] italic uppercase leading-none text-white mb-2">
                      {img.title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] md:text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all delay-100">
                      {img.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL (Colors Polished) --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0a0a0a] border border-white/10 w-full max-w-md p-8 rounded-sm relative"
            >
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-2xl font-black italic uppercase text-white tracking-tighter">Booking Hub</h4>
                <button onClick={() => setShowModal(false)} className="text-white/40 hover:text-white cursor-pointer"><FiX size={20} /></button>
              </div>
              <div className="space-y-4 font-sans">
                <div className="relative">
                  <FiPhone className="absolute top-4 left-4 text-dlb-accent" />
                  <input type="text" placeholder="PHONE NUMBER" className="w-full bg-zinc-900 border border-white/5 p-4 pl-12 text-white text-[10px] font-bold outline-none focus:border-dlb-accent transition-all uppercase" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="relative">
                  <FiMapPin className="absolute top-4 left-4 text-dlb-accent" />
                  <input type="text" placeholder="PICK-UP LOCATION" className="w-full bg-zinc-900 border border-white/5 p-4 pl-12 text-white text-[10px] font-bold outline-none focus:border-dlb-accent transition-all uppercase" onChange={(e) => setFormData({...formData, location: e.target.value})} />
                </div>
                <div className="relative">
                  <FiTool className="absolute top-4 left-4 text-dlb-accent" />
                  <textarea placeholder="DESCRIBE PROBLEM" rows={2} className="w-full bg-zinc-900 border border-white/5 p-4 pl-12 text-white text-[10px] font-bold outline-none focus:border-dlb-accent transition-all uppercase resize-none" onChange={(e) => setFormData({...formData, problem: e.target.value})} />
                </div>
                <button onClick={handleSend} className="w-full bg-white hover:bg-dlb-accent text-black font-black py-4 flex items-center justify-center gap-3 uppercase italic transition-all cursor-pointer">
                  Confirm Booking <FiSend size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}