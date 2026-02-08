"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "BL SHARMA",
      img: "/bl.jpg",
      quote: "2011 mein ek choti si jagah se shuruat ki thi. Aaj bhi wahi koshish rehti hai ki har customer hamare kaam se khush hoke jaye."
    },
    {
      name: "RA SHARMA",
      img: "/ram.jpg",
      quote: "Kaam chahe chota ho ya bada, humne hamesha imaandari se kiya hai. DLB Motors hamari isi mehnat ka ek hissa hai."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); 
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="about" className="bg-[#050505] py-20 px-6 overflow-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-dlb-accent font-mono text-[10px] tracking-[0.4em] uppercase block mb-4">
              Our Journey // 2011
            </span>
            <h2 className="text-4xl md:text-7xl font-[1000] italic uppercase text-white leading-[0.9] mb-8">
              SIMPLE WORK, <br/> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>HONEST RESULTS.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-6">
              DLB Motors Jaipur ka ek multi-car service garage hai jahan hum car ke har chhote-bade kaam ko poori bariki se karte hain. Iski shuruat 2011 mein <span className="text-white font-bold">BL Sharma</span> aur <span className="text-white font-bold">RA Sharma</span> ne ek chote se area se ki thi.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-lg italic border-l-2 border-dlb-accent pl-6">
              Shuruat mein car kam hoti thi par mehnat poori thi. Wahi purana tarika aur naye technology ka mix aaj humein yahan tak leke aaya hai. Hum sirf kaam nahi karte, bharosa banate hain.
            </p>
          </motion.div>

          <div className="relative min-h-[450px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full max-w-md bg-zinc-900/20 border border-white/5 p-8 md:p-12 rounded-sm text-center backdrop-blur-sm"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-8">
                  <Image 
                    src={testimonials[current].img} 
                    alt={testimonials[current].name} 
                    fill 
                    className="object-cover rounded-full border-2 border-dlb-accent/10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <p className="text-white text-base md:text-lg italic leading-relaxed mb-8 font-medium">
                  "{testimonials[current].quote}"
                </p>
                <h4 className="text-dlb-accent font-black text-xl italic uppercase tracking-tighter">
                  {testimonials[current].name}
                </h4>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -bottom-4 flex gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-700 ${current === i ? "w-12 bg-dlb-accent" : "w-4 bg-white/10"}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Updated Realistic Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-white/5">
          <Stat value="14+" label="Years of Work" />
          <Stat value="1.2k+" label="Cars Serviced" />
          <Stat value="4.8" label="Google Rating" isStar={true} />
          <Stat value="89+" label="Real Reviews" />
        </div>
      </div>
    </section>
  );
}

const Stat = ({ value, label, isStar }: { value: string, label: string, isStar?: boolean }) => (
  <div className="text-center md:text-left group cursor-default">
    <h5 className="text-white text-4xl md:text-5xl font-[1000] italic uppercase leading-none mb-2 group-hover:text-dlb-accent transition-colors duration-300 flex items-center justify-center md:justify-start gap-1">
      {value}
      {isStar && <span className="text-yellow-500 text-2xl md:text-3xl not-italic">★</span>}
    </h5>
    <p className="text-zinc-600 font-mono text-[9px] tracking-[0.3em] uppercase">{label}</p>
  </div>
);