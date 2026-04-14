"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function BlueprintLanding() {
  return (
    <>
      {/* 1. The Hero Section (The Hook) */}
      <section className="relative min-h-screen flex items-center justify-center bg-absolute-black px-6 text-center">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-sans text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] font-bold tracking-tighter uppercase mb-10"
          >
            YOUR JUDGMENT IS AN ASSET.<br/>
            <span className="text-stark-white/60">STOP SELLING IT BY THE HOUR.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="font-serif text-2xl md:text-3xl italic text-stark-white/80 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            You have spent a decade building deep domain expertise. Now, learn how to extract that knowledge and package it into scalable digital assets—without writing a single line of code.
          </motion.p>
          
          <motion.div 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <Link 
              href="/checkout/tier1" 
              className="bg-signal-orange text-stark-white px-12 py-6 font-sans font-bold uppercase tracking-widest text-lg md:text-xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20"
            >
              GET THE BLUEPRINT ($79)
            </Link>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-stark-white/50">
              [ FOR PROFESSIONALS WITH 10+ YEARS OF EXPERIENCE ]
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Agitation Section (Naming the Pain) */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
          >
            <motion.h2 variants={fadeInUP} className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              THE TRAP OF <span className="text-signal-orange">BESPOKE</span> WORK.
            </motion.h2>
            <motion.p variants={fadeInUP} className="font-serif text-2xl md:text-3xl leading-relaxed text-absolute-black/80">
              You are highly competent, well-compensated, and entirely capped by your own time. Every new client requires custom work. Every new project starts with a blank page. You are trading time for money, and you are running out of time.
            </motion.p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-absolute-black/10 pt-16"
          >
            <motion.div variants={fadeInUP}>
              <h3 className="font-sans text-2xl font-bold uppercase mb-6">[ THE CEILING ]</h3>
              <p className="font-serif text-lg leading-relaxed text-absolute-black/70">
                Your income is strictly limited by the hours you can physically work. You cannot scale without hiring, which only introduces more management overhead.
              </p>
            </motion.div>
            <motion.div variants={fadeInUP}>
              <h3 className="font-sans text-2xl font-bold uppercase mb-6">[ THE GOLDEN HANDCUFFS ]</h3>
              <p className="font-serif text-lg leading-relaxed text-absolute-black/70">
                You have a great salary, but you own no equity in the systems you build. Your expertise enriches the corporation, not your own portfolio.
              </p>
            </motion.div>
            <motion.div variants={fadeInUP}>
              <h3 className="font-sans text-2xl font-bold uppercase mb-6">[ THE FRICTION ]</h3>
              <p className="font-serif text-lg leading-relaxed text-absolute-black/70">
                You are constantly reinventing the wheel. You have built brilliant internal tools and spreadsheets, but they remain trapped on your hard drive instead of generating revenue in the market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Paradigm Shift */}
      <section className="bg-off-black py-40 px-6 lg:px-12 relative overflow-hidden flex items-center">
        {/* Placeholder for missing Digital Wireframe generation */}
        <div className="absolute inset-0 z-0 bg-absolute-black/50" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUP}
            className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10 text-stark-white"
          >
            WELCOME TO YOUR BLOOMSDAY.
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUP}
            className="font-serif text-xl md:text-3xl leading-relaxed text-stark-white/80 italic mb-16"
          >
            The tools have changed. The modern no-code stack allows anyone with deep domain expertise to build functional, highly profitable digital assets in a single weekend. The hard part is no longer the technology; the hard part is the extraction. 
            <br/><br/>
            <span className="text-signal-orange">We teach you how to package your ten years of experience into a product that works while you sleep.</span>
          </motion.p>
        </div>
      </section>

      {/* 4. The Proof Section (Carousels) */}
      <section className="py-32 bg-absolute-black overflow-hidden relative border-y border-off-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h2 className="font-sans text-4xl tracking-widest uppercase text-stark-white">PROOF OF WORK.</h2>
          <div className="w-24 h-1 bg-signal-orange mt-4"></div>
        </div>
        
        <div className="flex gap-8 overflow-x-auto px-6 lg:px-12 pb-12 snap-x wrapper-scroll no-scrollbar">
          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-[600px] shrink-0 snap-center bg-off-black border border-white/10 group">
            <div className="h-64 w-full bg-stark-white relative overflow-hidden">
               <Image src="/images/architecture.png" alt="Brutalist structure" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <span className="font-mono text-sm tracking-widest uppercase text-signal-orange mb-4 block">THE CONSULTANT</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4 leading-tight">How a 12-year compliance consultant turned her audit framework into a $4,000/mo SaaS tool.</h3>
              <p className="font-serif text-lg text-stark-white/70">She productized her bespoke consulting service using Airtable, creating recurring revenue without client calls.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-[600px] shrink-0 snap-center bg-off-black border border-white/10 group">
            <div className="h-64 w-full bg-stark-white relative overflow-hidden">
               <Image src="/images/nature.png" alt="Nature vs structure" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <span className="font-mono text-sm tracking-widest uppercase text-signal-orange mb-4 block">THE EXECUTIVE</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4 leading-tight">How a Director of Logistics built an internal routing dashboard that saved 40 hours a week.</h3>
              <p className="font-serif text-lg text-stark-white/70">He leveraged his domain knowledge to build a high-impact internal tool, proving his value and securing a promotion.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="min-w-[85vw] md:min-w-[600px] shrink-0 snap-center bg-off-black border border-white/10 group">
            <div className="h-64 w-full bg-stark-white relative overflow-hidden">
               <Image src="/images/architecture.png" alt="Brutalist structure" fill className="object-cover scale-110 grayscale group-hover:scale-100 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <span className="font-mono text-sm tracking-widest uppercase text-signal-orange mb-4 block">THE OPERATOR</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4 leading-tight">How a commercial architect productized his material-selection spreadsheet into a paid digital asset.</h3>
              <p className="font-serif text-lg text-stark-white/70">He took an internal tool he used daily and packaged it for the broader market, creating a new income stream.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Offer Section */}
      <section className="bg-absolute-black py-32 px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUP}
            className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6"
          >
            THE DIGITAL PRODUCT BLUEPRINT.
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUP}
            className="font-serif text-2xl italic text-stark-white/80 max-w-3xl mx-auto mb-20"
          >
            A structured, weekend-long curriculum designed to help you identify the exact piece of your domain knowledge that can be turned into a profitable digital product.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-24"
          >
            <div className="border border-white/10 p-10 bg-off-black hover:border-stark-white transition-colors duration-300">
              <span className="font-mono text-signal-orange mb-4 block">[ MODULE 1 ]</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4">THE EXPERTISE AUDIT</h3>
              <p className="font-serif text-lg text-stark-white/70">Discover the hidden assets in your daily workflow. Learn what you do effortlessly that others struggle with.</p>
            </div>
            <div className="border border-white/10 p-10 bg-off-black hover:border-stark-white transition-colors duration-300">
              <span className="font-mono text-signal-orange mb-4 block">[ MODULE 2 ]</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4">THE ONE-CLICK SOLUTION</h3>
              <p className="font-serif text-lg text-stark-white/70">Design a product that eliminates friction for your users. Turn your messy process into a clean UI.</p>
            </div>
            <div className="border border-white/10 p-10 bg-off-black hover:border-stark-white transition-colors duration-300">
              <span className="font-mono text-signal-orange mb-4 block">[ MODULE 3 ]</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4">THE NO-CODE STACK</h3>
              <p className="font-serif text-lg text-stark-white/70">Select the exact tools you need to build without code. No bloat, no unnecessary subscriptions.</p>
            </div>
            <div className="border border-white/10 p-10 bg-off-black hover:border-stark-white transition-colors duration-300">
              <span className="font-mono text-signal-orange mb-4 block">[ MODULE 4 ]</span>
              <h3 className="font-sans text-2xl font-bold uppercase mb-4">THE 48-HOUR VALIDATION</h3>
              <p className="font-serif text-lg text-stark-white/70">Prove market demand before you spend a minute building. Real dollars from real customers.</p>
            </div>
          </motion.div>

          <Link 
            href="/checkout/tier1" 
            className="inline-block bg-signal-orange text-stark-white px-16 py-6 font-sans font-bold uppercase tracking-widest text-2xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20"
          >
            START BUILDING ($79)
          </Link>
        </div>
      </section>

    </>
  );
}
