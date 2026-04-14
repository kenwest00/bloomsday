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

export default function About() {
  return (
    <div className="bg-absolute-black min-h-screen pb-32">
      {/* 1. Header */}
      <section className="pt-20 px-6 lg:px-12 max-w-4xl mx-auto mb-32">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeInUP} className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-stark-white">
            THE METHODOLOGY
          </motion.h1>
          <motion.div variants={fadeInUP} className="w-16 h-1 bg-signal-orange mb-12"></motion.div>
          <motion.p variants={fadeInUP} className="font-serif text-2xl md:text-3xl leading-relaxed text-stark-white/80">
            Expertise without leverage is just a high-paying job. You are still trading hours for dollars, and there is a hard ceiling on both.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Content */}
      <section className="px-6 lg:px-12 max-w-3xl mx-auto font-serif text-xl leading-relaxed text-stark-white space-y-12 mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}>
          <p className="mb-6">
            If you have spent ten or twenty years in a specialized field—whether that involves litigation, supply chain logistics, enterprise software architecture, or venture finance—you have developed judgment that other people need. 
          </p>
          <p className="mb-6 font-bold text-signal-orange uppercase tracking-widest text-sm font-mono">
            But right now, the only way people can access that judgment is by renting your time.
          </p>
          <p className="mb-12">
            Bloomsday is the structural methodology for decoupling your expertise from your calendar. We teach you how to identify the specific slice of your knowledge that has the highest product-market fit, and we guide you through the process of building it into an automated, revenue-generating digital asset.
          </p>
          
          <h2 className="font-sans text-3xl font-bold uppercase tracking-tighter mb-8 mt-16 border-b border-white/20 pb-4">
            KEN WEST, FOUNDER
          </h2>
          <div className="space-y-6">
            <p>
              Ken West is a digital product strategist and UX architect with more than 20 years of experience building systems, platforms, and experiences for organizations at the top of their industries. His client and engagement roster includes Apple, Google, Home Depot, AT&amp;T, PepsiCo, Stanley Black &amp; Decker, State Farm, and IHG — work spanning product research, digital transformation, experience design, and institutional strategy.
            </p>
            <p>
              Before founding Bloomsday, Ken served as the youngest vice president in the history of a historically Black college or university, leading institutional strategy at Livingstone College. He holds a bachelor&apos;s degree and two graduate degrees, including advanced study in New York and Paris. He is the author of <span className="italic">The Beauty of Everyday Thangs</span> and the co-producer of <span className="italic">Behind the Screens: Black Brilliance in the Digital Age</span>.
            </p>
            <p>
              He built Bloomsday because the problem he kept encountering was not a talent problem — it was a translation problem. The professionals who needed it most already had the expertise. What they lacked was the framework to turn that expertise into something scalable, automated, and independent of their calendar.
            </p>
            <p className="font-bold text-signal-orange">
              That framework is Bloomsday.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. Next Steps */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto border-t border-white/10 pt-20 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}>
          <h2 className="font-sans text-4xl font-bold tracking-tighter uppercase mb-8 text-stark-white">
            READY TO PRODUCTIZE YOUR EXPERTISE?
          </h2>
          <Link href="/curriculum" className="inline-block bg-stark-white text-absolute-black font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 transition-colors hover:bg-white/80">
            Explore the Curriculum
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
