"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Resend BUILDER WAITLIST audience
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-[#1A1A2D] w-full max-w-md rounded-[4px] overflow-hidden shadow-2xl">
        {/* Gold top bar */}
        <div className="h-[4px] w-full bg-[#C9A84C]" />

        <div className="p-8 md:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {submitted ? (
            <div className="text-center py-6">
              <Check className="mx-auto text-[#C9A84C] mb-4" size={40} />
              <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-white mb-3">
                YOU&apos;RE ON THE LIST.
              </h3>
              <p className="font-serif text-white/65 text-base leading-relaxed">
                We&apos;ll be in touch in June — with founding member pricing and first access to enrollment, before it opens to the public.
              </p>
            </div>
          ) : (
            <>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C] mb-4 font-bold">
                [ TIER 2 — THE BUILDER ]
              </div>
              <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-tight text-white mb-4 leading-tight">
                YOU&apos;RE EARLY.<br />THAT&apos;S THE POINT.
              </h2>
              <p className="font-serif text-white/65 text-sm leading-relaxed mb-8">
                The Builder opens June 2026. Waitlist members get first access and founding member pricing — before it opens to the public.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  type="email"
                  placeholder="Your professional email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-white/20 bg-white text-[#1A1A2D] p-4 font-sans text-sm focus:outline-none focus:border-[#C9A84C] placeholder:text-[#999999]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A84C] text-[#1A1A2D] font-mono font-bold uppercase tracking-widest py-4 text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "SECURING YOUR SPOT..." : "[ SECURE MY SPOT ]"}
                </button>
              </form>

              <p className="font-sans text-[10px] text-[#999999] text-center mt-4">
                No spam. We&apos;ll email you once when enrollment opens.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
