"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiSend } from "react-icons/fi";

export default function Feedback() {
  const [rating, setRating] = useState(5);
  const [msg, setMsg] = useState("");

  const handleFeedback = () => {
    if (!msg.trim()) return alert("Please write something first!");
    const whatsappNum = "919983613302";
    const finalMsg = `*New Customer Feedback*%0A%0A*Rating:* ${rating}/5 stars%0A*Message:* ${msg}`;
    window.open(`https://wa.me/${whatsappNum}?text=${finalMsg}`, "_blank");
  };

  return (
    <section className="bg-[#050505] py-16 px-6 border-t border-white/5 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <FiMessageSquare className="text-dlb-accent text-3xl mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-[1000] italic uppercase text-white mb-3 leading-none">
          How was your <span className="text-dlb-accent">Experience?</span>
        </h2>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-8">
          Aapka feedback humein behtar banne mein madad karta hai.
        </p>

        <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-10 rounded-sm">
          {/* Star Rating - Bigger for Mobile */}
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-3xl md:text-4xl transition-all duration-300 cursor-pointer ${
                  rating >= star ? "text-yellow-500 scale-110 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]" : "text-zinc-800"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            placeholder="Kaisa raha hamara kaam? Likhiye yahan..."
            rows={3}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-5 text-white text-[11px] md:text-xs font-bold outline-none focus:border-dlb-accent transition-all uppercase placeholder:text-zinc-700 resize-none mb-6"
          />

          <button
            onClick={handleFeedback}
            className="w-full bg-white hover:bg-dlb-accent text-black hover:text-white font-black py-5 flex items-center justify-center gap-3 uppercase italic transition-all cursor-pointer shadow-xl active:scale-95 text-xs md:text-sm"
          >
            Submit via WhatsApp <FiSend />
          </button>
        </div>
      </div>
    </section>
  );
}