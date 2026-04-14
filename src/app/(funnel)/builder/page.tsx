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

export default function Builder() {
  return (
    <div className="bg-absolute-black min-h-screen pb-32 font-sans text-stark-white">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUP} className="font-mono text-signal-orange uppercase tracking-widest text-sm mb-6 font-bold">
            TIER 2 — $797
          </motion.div>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            YOUR PRODUCT. BUILT. LAUNCHED. GENERATING REVENUE.
            <br />
            <span className="text-signal-orange">WITHOUT WRITING A SINGLE LINE OF CODE.</span>
          </motion.h1>
          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-4xl mx-auto mb-12 italic">
            The No-Code Product Builder is the comprehensive, self-paced masterclass that takes you from concept to a live, automated, revenue-generating digital product — using the modern no-code stack that elite teams use to ship in weeks, not months.
          </motion.p>
          <motion.div variants={fadeInUP}>
            <Link href="#checkout" className="inline-block bg-signal-orange text-stark-white font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
              ENROLL IN THE BUILDER — $797
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WHAT YOU WILL BUILD */}
      <section className="py-20 px-6 lg:px-12 bg-stark-white text-absolute-black border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-10 text-center">
              By the end of this program, you will have:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif text-xl">
              {[
                "A live digital product available for purchase",
                "An automated delivery system — your buyer purchases and receives access without your involvement",
                "A professional product page designed to convert",
                "A checkout flow connected to your bank account",
                "An email sequence that onboards your new buyer automatically",
                "A pricing and launch strategy ready to execute",
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

      {/* 3. THE CURRICULUM */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-stark-white">
            THE CURRICULUM
          </h2>
          <div className="w-16 h-1 bg-signal-orange mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          
          {/* Unit 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-signal-orange bg-absolute-black font-mono text-signal-orange shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">1</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Weeks 1–2</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">THE NO-CODE ARCHITECTURE</h3>
              <p className="font-serif text-white/70">
                You will learn how the modern no-code stack is structured and which tools do which jobs. No prior technical experience required. You will understand the system as an architect, not as a user clicking buttons. Tools covered include Notion, Gumroad/Lemon Squeezy, Beehiiv, ConvertKit, Airtable, Webflow, and Zapier.
              </p>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-white/20 bg-absolute-black font-mono text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">2</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Weeks 2–4</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">BUILDING YOUR PRODUCT</h3>
              <p className="font-serif text-white/70">
                You will build the actual content of your digital product — structured, sequenced, and formatted for your chosen delivery format. You will apply the Bloomsday Content Architecture method to make your product genuinely transformative, not just informational.
              </p>
            </div>
          </div>

          {/* Unit 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-white/20 bg-absolute-black font-mono text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">3</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Weeks 4–5</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">BUILDING YOUR STOREFRONT</h3>
              <p className="font-serif text-white/70">
                You will build the product page, the checkout flow, and the post-purchase experience. You will connect a payment processor and test the full purchase journey.
              </p>
            </div>
          </div>

          {/* Unit 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-white/20 bg-absolute-black font-mono text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">4</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Week 5</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">AUTOMATED DELIVERY & ONBOARDING</h3>
              <p className="font-serif text-white/70">
                You will build the automation layer — the system that delivers your product and onboards your buyer without any manual effort on your part. This is the infrastructure that makes your product scalable.
              </p>
            </div>
          </div>

          {/* Unit 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-white/20 bg-absolute-black font-mono text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">5</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Weeks 6–8</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">LAUNCH STRATEGY & FIRST SALES</h3>
              <p className="font-serif text-white/70">
                You will design and execute your launch. You will identify your first 10 buyers, craft the outreach, and generate your first revenue. Most Builder students make their first sale before completing this unit.
              </p>
            </div>
          </div>

          {/* Unit 6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-white/20 bg-absolute-black font-mono text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">6</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-signal-orange mb-2 tracking-widest uppercase">Weeks 8–10</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-3 text-stark-white">SCALE SYSTEMS</h3>
              <p className="font-serif text-white/70">
                You will build the foundation for repeatable growth: your referral system, your testimonial collection process, and your content-to-sale pipeline.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHAT'S INCLUDED */}
      <section className="bg-stark-white text-absolute-black py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b-4 border-absolute-black pb-4 text-center">
              WHAT&apos;S INCLUDED
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif text-lg leading-relaxed mt-12">
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> 10 weeks of self-paced video instruction</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Step-by-step build guides for every tool in the stack</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Fill-in-the-blank templates for product pages, email sequences, and launch outreach</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Access to the Bloomsday Builder Community (Slack-based peer network)</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Monthly live Q&amp;A with Ken West (open to all active Builder students)</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Lifetime access to all future curriculum updates</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. CHECKOUT/CTA */}
      <section id="checkout" className="py-32 px-6 lg:px-12 text-center bg-signal-orange text-absolute-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
            YOUR KNOWLEDGE IS WORTH MORE THAN YOUR HOURLY RATE.
          </h2>
          
          <button className="bg-absolute-black text-stark-white w-full max-w-md py-6 font-mono text-lg font-bold uppercase tracking-widest hover:bg-absolute-black/90 transition-colors mb-6 shadow-2xl shadow-absolute-black/20">
            ENROLL IN THE BUILDER — $797
          </button>
          
          <div className="font-mono text-sm uppercase tracking-widest font-bold">
            🔒 30-Day Money-Back Guarantee.
            <span className="block font-serif text-base capitalize mt-2 italic font-normal text-absolute-black/70">Pay once, access for life.</span>
          </div>

          <div className="mt-12 pt-12 border-t border-absolute-black/20">
            <Link href="/blueprint" className="font-mono text-sm tracking-widest uppercase border-b border-absolute-black pb-1 hover:opacity-50 transition-opacity">
              START WITH THE BLUEPRINT ($79) &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
