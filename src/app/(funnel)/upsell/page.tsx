import { motion } from "framer-motion";
import Link from "next/link";

export default function UpsellPage() {
  return (
    <>
      {/* 1. Hero / Hook */}
      <section className="bg-absolute-black min-h-[70vh] flex items-center justify-center text-center px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-sans text-[clamp(2.5rem,5vw,6rem)] leading-[0.9] font-bold tracking-tighter uppercase mb-10 text-signal-orange">
            WAIT. YOUR BLUEPRINT IS READY,<br/>
            <span className="text-stark-white">BUT YOU STILL NEED TO BUILD IT.</span>
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic text-stark-white/80 max-w-4xl mx-auto leading-relaxed">
            You now have the exact framework to identify your product. But identifying it is only step one. Now, you need the technical architecture to build, sell, and deliver it automatically.
          </p>
        </div>
      </section>

      {/* 2. The Offer */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-5xl font-bold uppercase tracking-tighter mb-8">
            THE NO-CODE PRODUCT BUILDER.
          </h2>
          <p className="font-serif text-2xl leading-relaxed">
            Because you just committed to the Blueprint, I am offering you a one-time, <span className="font-bold text-signal-orange border-b-2 border-signal-orange pb-1">$200 discount</span> on the comprehensive Tier 2 masterclass. This offer is only valid on this page.
          </p>
        </div>
      </section>

      {/* 3. The Curriculum Overview */}
      <section className="bg-off-black text-stark-white py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          <div className="border-b md:border-b-0 md:border-r border-white/10 p-12 hover:bg-absolute-black transition-colors">
            <span className="font-mono text-signal-orange tracking-widest uppercase mb-4 block">[ MODULE 1 ]</span>
            <h3 className="font-sans text-2xl font-bold uppercase mb-4">[ THE ARCHITECTURE ]</h3>
            <p className="font-serif text-lg text-stark-white/70 leading-relaxed">
              Map the exact user journey from landing page to checkout to delivery.
            </p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-white/10 p-12 hover:bg-absolute-black transition-colors">
            <span className="font-mono text-signal-orange tracking-widest uppercase mb-4 block">[ MODULE 2 ]</span>
            <h3 className="font-sans text-2xl font-bold uppercase mb-4">[ THE BUILD ]</h3>
            <p className="font-serif text-lg text-stark-white/70 leading-relaxed">
              Step-by-step, over-the-shoulder tutorials on configuring Podia, Stripe, and Zapier.
            </p>
          </div>
          <div className="p-12 hover:bg-absolute-black transition-colors">
            <span className="font-mono text-signal-orange tracking-widest uppercase mb-4 block">[ MODULE 3 ]</span>
            <h3 className="font-sans text-2xl font-bold uppercase mb-4">[ THE LAUNCH ]</h3>
            <p className="font-serif text-lg text-stark-white/70 leading-relaxed">
              The exact email sequence and LinkedIn strategy to acquire your first 100 customers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-absolute-black text-center py-32 flex flex-col items-center px-6">
        <button className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-16 py-6 text-2xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20 mb-8 block">
          ADD TO ORDER ($597)
        </button>
        <Link href="/builder" className="font-mono text-sm uppercase tracking-widest text-stark-white/50 hover:text-stark-white transition-colors border-b border-transparent hover:border-stark-white pb-1">
          No thanks, I will figure out the tech stack myself.
        </Link>
      </section>
    </>
  );
}
