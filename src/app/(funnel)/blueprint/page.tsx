"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { useState } from "react";
import AuthorByline from "@/components/AuthorByline";

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
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '' });

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSubmitted(true);
  };

  return (
    <div className="bg-absolute-black min-h-screen pb-32 font-sans text-stark-white">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUP} className="font-mono text-signal-orange uppercase tracking-widest text-sm mb-6 font-bold">
            TIER 1 — $79
          </motion.div>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
            EVERYTHING YOU NEED TO IDENTIFY YOUR FIRST DIGITAL PRODUCT. IN ONE WEEKEND.
          </motion.h1>

          {/* FOUNDER BYLINE INJECTION */}
          <motion.div variants={fadeInUP} className="max-w-2xl mx-auto text-left mb-12">
            <AuthorByline />
          </motion.div>

          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-12 italic">
            Most professionals spend years thinking about building something. The Blueprint is the program that ends the thinking and starts the building.
          </motion.p>
          <motion.div variants={fadeInUP}>
            <Link href="#checkout" className="inline-block bg-signal-orange text-stark-white font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
              GET INSTANT ACCESS — $79
            </Link>
            <p className="font-serif text-base italic text-stark-white/70 mt-4">
              Less than 15 minutes of your billable rate.
            </p>
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

      {/* ADDITIONAL STUDENT OUTCOME STORY */}
      <section className="py-24 px-6 lg:px-12 bg-off-black border-b border-white/20">
        <div className="max-w-4xl mx-auto border-l-4 border-[var(--category-mindset)] pl-8 py-2">
          <div className="font-mono text-[var(--category-mindset)] text-sm tracking-widest uppercase font-bold mb-6">
            [ WHAT A BLUEPRINT BUILDS ]
          </div>
          <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
            &quot;The lease negotiation playbook now generates steady revenue from buyers who could never have afforded my hourly rate. The product reaches the market I could not.&quot;
          </p>
          <div className="font-mono text-xs uppercase tracking-widest text-white/50">
            — Built using The Digital Product Blueprint
          </div>
          <p className="font-serif text-base text-white/50 leading-relaxed italic">
            Results shown are from selected cohort participants. Not every professional who completes Bloomsday launches a revenue-generating product. Most who do report first revenue within 90 days of launch.
          </div>
        </div>
      </section>

      {/* 5. CHECKOUT/CTA (UPGRADED CAPTURE) */}
      <section id="checkout" className="py-32 px-6 lg:px-12 bg-signal-orange text-absolute-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none text-center">
            STOP THINKING ABOUT IT.<br/>START BUILDING IT.
          </h2>
          
          <div className="bg-white p-8 md:p-12 shadow-2xl mt-12 mb-8">
            {checkoutSubmitted ? (
              <div className="text-center py-10">
                <Check className="mx-auto text-signal-orange mb-4" size={48} />
                <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-2">YOU&apos;RE ON THE LIST.</h3>
                <p className="font-serif text-lg text-absolute-black/70">Our payment gateway is launching this week. We will email you the secure checkout link as soon as it goes live.</p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-4">
                <div className="font-sans font-bold text-center text-xl uppercase tracking-tighter mb-4">
                  CHECKOUT INTEGRATION PENDING.<br/>RESERVE YOUR ACCESS NOW.
                </div>
                <input 
                  required
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full border border-absolute-black/20 p-4 font-sans focus:outline-none focus:border-signal-orange"
                  value={checkoutForm.name}
                  onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border border-absolute-black/20 p-4 font-sans focus:outline-none focus:border-signal-orange"
                  value={checkoutForm.email}
                  onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                />
                <button type="submit" className="bg-absolute-black text-stark-white w-full py-6 font-mono text-lg font-bold uppercase tracking-widest hover:bg-absolute-black/90 transition-colors mt-2">
                  GET INSTANT ACCESS — $79
                </button>
                <p className="font-serif text-base text-absolute-black/70 mt-2">
                  Less than 15 minutes of your billable rate.
                </p>
              </form>
            )}
          </div>
          
          <div className="font-mono text-sm uppercase tracking-widest font-bold text-center mb-8">
            THE OUTCOME GUARANTEE.
            <span className="block font-serif text-base capitalize mt-2 italic font-normal text-absolute-black/70">Complete Module 1 — the Domain Leverage Audit. If it does not surface a product opportunity worth at least 10x the $79, we refund you in full and keep your Private List access active.</span>
          </div>

          <div className="text-center font-serif text-lg py-8 border-y border-absolute-black/20 mb-12">
            Already know what you want to build? Skip ahead to The No-Code Product Builder ($797) — and we&apos;ll credit your Blueprint purchase in full. 
            <Link href="/builder" className="inline-block mt-2 font-mono text-sm uppercase tracking-widest border-b border-absolute-black ml-2 font-bold hover:opacity-70 transition-opacity">
              [ LEARN ABOUT THE BUILDER &rarr; ]
            </Link>
          </div>

          <div className="text-center border-absolute-black/20">
            <Link href="/blog" className="font-mono text-sm tracking-widest uppercase border-b border-absolute-black pb-1 hover:opacity-50 transition-opacity">
              TAKE THE EXPERTISE AUDIT FIRST (FREE) &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
