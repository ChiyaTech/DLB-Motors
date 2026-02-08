"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiStar, FiExternalLink } from "react-icons/fi";

export default function ContactLocation() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789012!2d75.7123456!3d26.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwNDInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123";
  const mapDirectUrl = "https://maps.app.goo.gl/ChIJiz1z2720bTkRNs9BwII72m8";

  return (
    <section id="contact" className="bg-[#050505] py-16 px-6 border-t border-white/5 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Verified Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-dlb-accent font-mono text-[10px] tracking-[0.4em] uppercase block mb-4">
              Verified Location // Sirsi Road
            </span>
            <h2 className="text-4xl md:text-7xl font-[1000] italic uppercase text-white leading-[0.9] mb-10">
              REACH THE <br/> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>WORKSHOP.</span>
            </h2>

            <div className="space-y-6">
              <ContactItem 
                icon={<FiMapPin />} 
                title="Address" 
                detail="House no 7, 2 Gali, Sirsi Rd, Teeja Nagar, Panchyawala, Jaipur, Rajasthan 302034"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactItem 
                  icon={<FiPhone />} 
                  title="Enquiry & Service" 
                  detail="+91 99836 13302"
                />
                <ContactItem 
                  icon={<FiPhone />} 
                  title="Pick-up & Drop" 
                  detail="+91 978421 2903"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactItem 
                  icon={<FiClock />} 
                  title="Business Hours" 
                  detail="OPEN ALL DAY: 9:00 AM - 8:00 PM"
                />
                <ContactItem 
                  icon={<FiStar className="text-yellow-500" />} 
                  title="Google Rating" 
                  detail="4.8 Stars (89+ Reviews)"
                />
              </div>

              <div className="pt-4">
                <a 
                  href={mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-dlb-accent font-mono text-[10px] tracking-widest uppercase border border-dlb-accent/30 px-8 py-4 hover:bg-dlb-accent hover:text-black transition-all cursor-pointer shadow-xl active:scale-95"
                >
                  Navigate via Google Maps <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Accurate Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px] md:h-[450px] w-full bg-zinc-900 border border-white/5 rounded-sm overflow-hidden"
          >
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.1)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, title, detail }: { icon: any, title: string, detail: string }) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1 text-xl text-dlb-accent group-hover:scale-110 transition-transform">{icon}</div>
    <div>
      <h4 className="text-zinc-500 font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1">{title}</h4>
      <p className="text-white text-sm md:text-base font-bold italic leading-tight">{detail}</p>
    </div>
  </div>
);