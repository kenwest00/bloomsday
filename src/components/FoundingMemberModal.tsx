"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

interface FoundingMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOMAINS = [
  "Healthcare",
  "Legal",
  "Finance",
  "Real Estate",
  "Supply Chain / Logistics",
  "Technology",
  "Compliance / Regulatory",
  "Other",
];

export default function FoundingMemberModal({ isOpen, onClose }: FoundingMemberModalProps) {
  const [form, setForm] = useState({ name: "", email: "", domain: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Resend ACCELERATOR FOUNDING COHORT audience
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-[#1A1A2D] w-full max-w-md rounded-[4px] overflow-hidden shadow-2xl">
        {/* Terracotta top bar */}
        <div className="h-[4px] w-full bg-[#B85C3A]" />

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
              <Check className="mx-auto text-[#B85C3A] mb-4" size={40} />
              <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-white mb-3">
                REQUEST RECEIVED.
              </h3>
              <p className="font-serif text-white/65 text-base leading-relaxed">
                Applications are reviewed individually. We&apos;ll be in touch before June with founding cohort details and pricing. Questions? Reply to the confirmation email.
              </p>
            </div>
          ) : (
            <>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#B85C3A] mb-4 font-bold">
                [ TIER 3 — THE ACCELERATOR ]
              </div>
              <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-tight text-white mb-4 leading-tight">
                THE FOUNDING COHORT<br />IS NOT A WAITLIST.
              </h2>
              <p className="font-serif text-white/65 text-sm leading-relaxed mb-8">
                It is a limited group of senior professionals who will build alongside Ken West in June 2026. Founding members receive direct access, founding pricing, and priority cohort selection. Applications open before the public announcement.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                  className="w-full border border-white/20 bg-white text-[#1A1A2D] p-4 font-sans text-sm focus:outline-none focus:border-[#B85C3A] placeholder:text-[#999999]"
                />
                <input
                  required
                  type="email"
                  placeholder="Your professional email address"
                  value={form.email}
                  onChange={set("email")}
                  className="w-full border border-white/20 bg-white text-[#1A1A2D] p-4 font-sans text-sm focus:outline-none focus:border-[#B85C3A] placeholder:text-[#999999]"
                />
                <select
                  required
                  value={form.domain}
                  onChange={set("domain")}
                  className="w-full border border-white/20 bg-white text-[#1A1A2D] p-4 font-sans text-sm focus:outline-none focus:border-[#B85C3A]"
                >
                  <option value="" disabled>Your domain / field of expertise</option>
                  {DOMAINS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#B85C3A] text-white font-mono font-bold uppercase tracking-widest py-4 text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "SUBMITTING..." : "[ REQUEST FOUNDING MEMBER ACCESS ]"}
                </button>
              </form>

              <p className="font-sans text-[10px] text-[#999999] text-center mt-4 italic">
                Applications are reviewed. Not everyone will be accepted into the founding cohort.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
