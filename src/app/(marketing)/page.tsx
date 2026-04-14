"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Architectural Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/architecture.png')" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="font-sans text-[clamp(3rem,8vw,10rem)] leading-none font-bold tracking-wider uppercase mb-6"
          >
            BLOOMSDAY
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="font-sans text-xl md:text-3xl tracking-widest uppercase text-signal-orange mb-8"
          >
            THE MODERN PROFESSIONAL&apos;S GUIDE TO SCALE.
          </motion.h2>
          
          <motion.p 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="font-serif text-2xl md:text-4xl italic text-stark-white/80 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            You have spent a decade building deep domain expertise. Now, learn how to extract that knowledge and package it into scalable digital assets—without writing a single line of code.
          </motion.p>
          
          <motion.div 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono uppercase tracking-widest text-sm"
          >
            <Link 
              href="/curriculum" 
              className="bg-signal-orange text-stark-white px-10 py-5 font-bold hover:bg-orange-600 transition-colors w-full sm:w-auto"
            >
              EXPLORE THE CURRICULUM
            </Link>
            <Link 
              href="/about" 
              className="border border-stark-white text-stark-white px-10 py-5 hover:bg-stark-white hover:text-absolute-black transition-colors w-full sm:w-auto"
            >
              READ THE MANIFESTO
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. The Manifesto Section */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <motion.div variants={fadeInUP} className="lg:col-span-5">
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none sticky top-32">
              THE TRAP OF <br/><span className="text-signal-orange">BESPOKE</span> WORK.
            </h2>
          </motion.div>
          <motion.div variants={fadeInUP} className="lg:col-span-7 font-serif text-2xl md:text-3xl leading-relaxed">
            <p className="mb-8">
              You are highly competent, well-compensated, and entirely capped by your own time. Every new client requires custom work. Every new project starts with a blank page. 
            </p>
            <p className="mb-8">
              You are trading time for money, and you are running out of time. 
            </p>
            <p className="font-bold">
              Bloomsday is the methodology for escaping the billable hour. We teach senior professionals how to productize their judgment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. The Product Directory */}
      <section className="bg-off-black py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUP}
            className="mb-20 text-center"
          >
            <h2 className="font-sans text-4xl tracking-widest uppercase mb-4 text-stark-white">THE SOLUTION</h2>
            <div className="w-24 h-1 bg-signal-orange mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* TIER 1 */}
            <motion.div variants={fadeInUP} className="border border-white/10 p-10 hover:border-signal-orange transition-colors duration-500 group relative bg-absolute-black">
              <div className="font-mono text-xs text-stark-white/50 mb-8 uppercase tracking-widest">
                [ TIER 1 ] — $79
              </div>
              <h3 className="font-sans text-3xl mb-6 font-bold uppercase tracking-wide group-hover:text-signal-orange transition-colors">
                [ THE BLUEPRINT ]
              </h3>
              <p className="font-serif text-lg text-stark-white/80 mb-12 min-h-[120px]">
                A weekend-long curriculum to identify your most valuable domain knowledge and design your first digital product.
              </p>
              <Link href="/blueprint" className="font-mono text-sm tracking-widest uppercase border-b border-stark-white pb-1 hover:text-signal-orange hover:border-signal-orange transition-all">
                Enter Funnel &rarr;
              </Link>
            </motion.div>

            {/* TIER 2 */}
            <motion.div variants={fadeInUP} className="border border-white/10 p-10 hover:border-signal-orange transition-colors duration-500 group relative bg-absolute-black">
              <div className="font-mono text-xs text-stark-white/50 mb-8 uppercase tracking-widest">
                [ TIER 2 ] — $797
              </div>
              <h3 className="font-sans text-3xl mb-6 font-bold uppercase tracking-wide group-hover:text-signal-orange transition-colors">
                [ THE BUILDER ]
              </h3>
              <p className="font-serif text-lg text-stark-white/80 mb-12 min-h-[120px]">
                The comprehensive, self-paced masterclass on the modern no-code stack. Turn your blueprint into a revenue-generating asset.
              </p>
              <Link href="/builder" className="font-mono text-sm tracking-widest uppercase border-b border-stark-white pb-1 hover:text-signal-orange hover:border-signal-orange transition-all">
                View Curriculum &rarr;
              </Link>
            </motion.div>

            {/* TIER 3 */}
            <motion.div variants={fadeInUP} className="border border-white/10 p-10 hover:border-signal-orange transition-colors duration-500 group relative bg-absolute-black">
              <div className="font-mono text-xs text-stark-white/50 mb-8 uppercase tracking-widest">
                [ TIER 3 ] — $3,000
              </div>
              <h3 className="font-sans text-3xl mb-6 font-bold uppercase tracking-wide group-hover:text-signal-orange transition-colors">
                [ THE ACCELERATOR ]
              </h3>
              <p className="font-serif text-lg text-stark-white/80 mb-12 min-h-[120px]">
                A live, 6-week cohort for high-performing professionals. Build, launch, and scale your product with direct guidance.
              </p>
              <Link href="/accelerator" className="font-mono text-sm tracking-widest uppercase border-b border-stark-white pb-1 hover:text-signal-orange hover:border-signal-orange transition-all">
                Apply Now &rarr;
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. The Founder Letter */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUP}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-1 bg-absolute-black mx-auto mb-16"></div>
          <h2 className="font-sans text-6xl tracking-tighter uppercase mb-16 font-bold">
            WHY I BUILT BLOOMSDAY.
          </h2>
          <div className="font-serif text-2xl md:text-3xl leading-loose text-left mb-16">
            <p className="mb-8">
              &quot;I spent 25 years building digital products for the world&apos;s largest brands. I watched brilliant lawyers, engineers, and executives struggle to scale their impact because they lacked the technical vocabulary to productize what they knew.
            </p>
            <p className="mb-8">
              They believed they needed venture capital. They didn&apos;t. They just needed a framework.
            </p>
            <p className="italic font-bold">
              Bloomsday is that framework.&quot;
            </p>
          </div>
          <p className="font-mono uppercase tracking-widest text-right text-sm">
            — THE FOUNDER
          </p>
        </motion.div>
      </section>
    </>
  );
}
