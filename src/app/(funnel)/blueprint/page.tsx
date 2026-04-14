"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const fadeInUP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Blueprint() {
  return (
    <div className="bg-absolute-black min-h-screen pb-32 font-sans text-stark-white">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUP} className="font-mono text-signal-orange uppercase tracking-widest text-sm mb-6 font-bold">
            TIER 1 — $79
          </motion.div>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            EVERYTHING YOU NEED TO IDENTIFY YOUR FIRST DIGITAL PRODUCT. IN ONE WEEKEND.
          </motion.h1>
          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-12 italic">
            Most professionals spend years thinking about building something. The Blueprint is the program that ends the thinking and starts the building.
          </motion.p>
          <motion.div variants={fadeInUP}>
            <Link href="#checkout" className="inline-block bg-signal-orange text-stark-white font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
              GET INSTANT ACCESS — $79
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE PROMISE */}
      <section className="py-20 px-6 lg:px-12 bg-stark-white text-absolute-black border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-10 text-center">
              By the end of this weekend program, you will know:
            </h2>
            <div className="space-y-6 font-serif text-xl">
              {[
                "Exactly which area of your expertise has the strongest product-market fit",
                "What format your product should take — and why",
                "What to charge — and the psychology behind your price point",
                "How to describe your product so your ideal buyer immediately understands why they need it",
                "What to build first, what to defer, and what to skip entirely"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="text-signal-orange mt-1 flex-shrink-0" size={24} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MODULE BREAKDOWN */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-stark-white">
            MODULE BREAKDOWN
          </h2>
          <div className="w-16 h-1 bg-signal-orange mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {/* Module 1 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Saturday Morning, ~2 hours
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 1 — THE DOMAIN LEVERAGE AUDIT
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              You will complete a structured inventory of every area of expertise you hold and score each one across four dimensions: urgency of need, uniqueness of your depth, accessibility to your ideal buyer, and your willingness to teach it. Most professionals are surprised to discover their highest-value knowledge area is not the one they expected.
            </p>
          </div>

          {/* Module 2 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Saturday Afternoon, ~1.5 hours
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 2 — THE BUYER PORTRAIT
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              You will define the exact person most likely to pay for what you know — not a vague demographic, but a specific professional at a specific moment of need. You will write their problem in their language, which becomes the core of your product&apos;s marketing.
            </p>
          </div>

          {/* Module 3 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Saturday Afternoon, ~1 hour
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 3 — THE PRODUCT FORMAT DECISION
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              Should you build a course? A template? A diagnostic tool? A membership? A guide? This module walks you through the format-fit matrix so you can choose the structure that matches your content, your buyer&apos;s urgency, and your own capacity.
            </p>
          </div>

          {/* Module 4 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Saturday Evening, ~45 min
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 4 — THE PRICING FRAMEWORK
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              You will establish your launch price using the Bloomsday Value-Anchoring Method — a framework derived from enterprise product pricing principles and adapted for solo practitioner launches.
            </p>
          </div>

          {/* Module 5 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Sunday Morning, ~2 hours
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 5 — THE PRODUCT ARCHITECTURE MAP
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              You will design the complete structure of your product: what&apos;s included, how it&apos;s sequenced, how it&apos;s delivered, and what the buyer&apos;s transformation looks like from entry to exit.
            </p>
          </div>

          {/* Module 6 */}
          <div className="border border-white/20 p-8 md:p-12 relative bg-off-black">
            <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-4">
              Sunday Afternoon, ~1.5 hours
            </div>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
              MODULE 6 — YOUR 90-DAY LAUNCH ROADMAP
            </h3>
            <p className="font-serif text-xl text-white/80 leading-relaxed">
              You will leave with a sequenced, week-by-week launch plan. Not a wish list — an operational roadmap with specific milestones and decision points.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHO IT IS FOR */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b-4 border-absolute-black pb-4">
              WHO THIS IS FOR
            </h2>
            <ul className="space-y-4 font-serif text-xl leading-relaxed">
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Senior professionals with 10 or more years of domain expertise in any field</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Consultants and practitioners who want to earn income that isn&apos;t tied to their calendar</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Corporate executives exploring income diversification or an eventual exit from employment</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Anyone who has said &quot;I should package what I know&quot; and never started</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b-4 border-signal-orange pb-4">
              WHO THIS IS NOT FOR
            </h2>
            <ul className="space-y-4 font-serif text-xl leading-relaxed text-absolute-black/70">
              <li className="flex items-start gap-3"><Minus className="shrink-0 mt-1 text-absolute-black" /> Early-career professionals still building foundational skills</li>
              <li className="flex items-start gap-3"><Minus className="shrink-0 mt-1 text-absolute-black" /> People looking for a get-rich-quick solution — this is a framework, not a shortcut</li>
              <li className="flex items-start gap-3"><Minus className="shrink-0 mt-1 text-absolute-black" /> Anyone not willing to invest a focused weekend</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. CHECKOUT/CTA */}
      <section id="checkout" className="py-32 px-6 lg:px-12 text-center bg-signal-orange text-absolute-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
            STOP THINKING ABOUT IT.<br/>START BUILDING IT.
          </h2>
          
          <button className="bg-absolute-black text-stark-white w-full max-w-md py-6 font-mono text-lg font-bold uppercase tracking-widest hover:bg-absolute-black/90 transition-colors mb-6 shadow-2xl shadow-absolute-black/20">
            GET INSTANT ACCESS — $79
          </button>
          
          <div className="font-mono text-sm uppercase tracking-widest font-bold">
            🔒 30-Day Money-Back Guarantee.
            <span className="block font-serif text-base capitalize mt-2 italic font-normal text-absolute-black/70">No questions asked.</span>
          </div>

          <div className="mt-12 pt-12 border-t border-absolute-black/20">
            <Link href="/blog" className="font-mono text-sm tracking-widest uppercase border-b border-absolute-black pb-1 hover:opacity-50 transition-opacity">
              TAKE THE EXPERTISE AUDIT FIRST (FREE) &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
