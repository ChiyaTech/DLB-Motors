"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiStar, FiExternalLink } from "react-icons/fi";

export default function ContactLocation() {
  // REAL Google Maps embed (always resolves to correct pin)
  const mapEmbedUrl =
    "https://www.google.com/maps?q=DLB%20Motors%20Sirsi%20Road%20Jaipur&output=embed";

  // REAL navigation link (opens in Google Maps app or browser)
  const mapDirectUrl =
    "https://www.google.com/maps/search/?api=1&query=DLB+Motors+Sirsi+Road+Jaipur";

  return (
    <section
      id="contact"
      className="bg-[#050505] py-16 px-6 border-t border-white/5 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Contact Info */}
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
              REACH THE <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                WORKSHOP.
              </span>
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

          {/* Right: Live Google Map */}
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
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) contrast(1.1)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({
  icon,
  title,
  detail,
}: {
  icon: any;
  title: string;
  detail: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1 text-xl text-dlb-accent group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-zinc-500 font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1">
        {title}
      </h4>
      <p className="text-white text-sm md:text-base font-bold italic leading-tight">
        {detail}
      </p>
    </div>
  </div>
);
