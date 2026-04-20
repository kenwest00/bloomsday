"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";
import { useState } from "react";

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
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '' });

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSubmitted(true);
  };

  return (
    <div className="bg-absolute-black min-h-screen pb-32 font-sans text-stark-white">
      {/* 3.1 HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUP} className="font-mono text-[#4A6FA5] uppercase tracking-widest text-sm mb-6 font-bold">
            TIER 2 — $797
          </motion.div>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            YOUR PRODUCT. BUILT. LAUNCHED. GENERATING REVENUE.
            <br />
            <span className="text-stark-white">WITHOUT AN ENGINEERING TEAM.</span>
          </motion.h1>

          {/* 3.2 FOUNDER BYLINE */}
          <motion.div variants={fadeInUP} className="max-w-2xl mx-auto text-left mb-12">
            <AuthorByline />
          </motion.div>

          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-4xl mx-auto mb-12 italic">
            The Product Builder is the comprehensive, self-paced masterclass that takes you from concept to a live, automated, revenue-generating digital product — using the same modern software stack that elite teams use to ship in weeks, not months.
          </motion.p>
          <motion.div variants={fadeInUP} className="flex flex-col items-center">
            <Link href="#checkout" className="inline-block bg-[#4A6FA5] text-stark-white font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-[#355380] transition-colors shadow-2xl mb-6">
              ENROLL IN THE BUILDER — $797
            </Link>
            <div className="font-serif text-lg text-white/80">
              Already have a blueprint? 
              <Link href="#checkout" className="ml-2 font-mono text-sm uppercase tracking-widest text-[#4A6FA5] font-bold border-b border-[#4A6FA5] pb-0.5 hover:text-white hover:border-white transition-all">
                START HERE &rarr;
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3.3 WHAT YOU WILL BUILD */}
      <section className="py-24 px-6 lg:px-12 bg-stark-white text-absolute-black border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-10 text-center">
              BY THE END OF THIS PROGRAM, YOU WILL HAVE:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-xl">
              {[
                "A live digital product available for purchase right now",
                "An automated delivery system — your buyer pays and receives access without your involvement",
                "A professional product page designed to convert",
                "A checkout flow connected directly to your bank account",
                "An email sequence that onboards every new buyer automatically",
                "A pricing and launch strategy ready to execute on day one",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="text-[#4A6FA5] mt-1 flex-shrink-0" size={24} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3.4 CURRICULUM BREAKDOWN */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-stark-white">
            THE CURRICULUM
          </h2>
          <div className="w-16 h-1 bg-[#4A6FA5] mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#4A6FA5]/40 before:to-transparent">
          
          {/* Unit 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5] bg-absolute-black font-mono text-[#4A6FA5] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">1</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Weeks 1–2</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 1 — THE MODERN SOFTWARE STACK</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will learn how the modern software stack is structured and which tools do which jobs. No technical background required. You will understand the system as an architect, not as a user clicking buttons. Tools covered: Notion, Gumroad, Lemon Squeezy, Beehiiv, ConvertKit, Airtable, Webflow, and Zapier.
              </p>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5]/50 bg-absolute-black font-mono text-[#4A6FA5]/70 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">2</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Weeks 2–4</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 2 — BUILDING YOUR PRODUCT</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will build the actual content of your digital product — structured, sequenced, and formatted for your chosen delivery format. You will apply the Bloomsday Content Architecture method to ensure your product creates genuine transformation, not just information delivery.
              </p>
            </div>
          </div>

          {/* Unit 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5]/50 bg-absolute-black font-mono text-[#4A6FA5]/70 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">3</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Weeks 4–5</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 3 — BUILDING YOUR STOREFRONT</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will build the product page, the checkout flow, and the post-purchase experience. You will connect a payment processor and test the complete purchase journey end-to-end.
              </p>
            </div>
          </div>

          {/* Unit 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5]/50 bg-absolute-black font-mono text-[#4A6FA5]/70 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">4</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Week 5</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 4 — AUTOMATED DELIVERY & ONBOARDING</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will build the automation layer — the system that delivers your product and onboards your buyer without any manual effort on your part. This is the infrastructure that makes your product scalable.
              </p>
            </div>
          </div>

          {/* Unit 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5]/50 bg-absolute-black font-mono text-[#4A6FA5]/70 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">5</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Weeks 6–8</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 5 — LAUNCH STRATEGY & FIRST SALES</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will design and execute your launch. You will identify your first 10 buyers, craft the outreach, and generate your first revenue. Most Builder students make their first sale before completing this unit.
              </p>
            </div>
          </div>

          {/* Unit 6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#4A6FA5]/50 bg-absolute-black font-mono text-[#4A6FA5]/70 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">6</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-off-black border border-white/10">
              <div className="font-mono text-xs text-[#4A6FA5] mb-2 tracking-widest uppercase font-bold">Weeks 8–10</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-4 text-stark-white">UNIT 6 — SCALE SYSTEMS</h3>
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                You will build the foundation for repeatable growth: your referral architecture, your testimonial collection process, and your content-to-sale pipeline.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3.5 WHAT'S INCLUDED */}
      <section className="bg-stark-white text-absolute-black py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b-4 border-absolute-black pb-4 text-left">
              EVERYTHING INCLUDED AT $797:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 font-serif text-lg leading-relaxed mt-12">
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> 10 weeks of self-paced video instruction</li>
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> Step-by-step build guides for every tool in the no-code stack</li>
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> Fill-in-the-blank templates for product pages, email sequences, and launch outreach</li>
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> Access to the Bloomsday Builder Community (Slack-based peer network)</li>
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> Monthly live Q&amp;A with Ken West — open to all active Builder students</li>
              <li className="flex items-start gap-4"><Check className="text-[#4A6FA5] shrink-0 mt-1" /> Lifetime access to all future curriculum updates</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3.6 STUDENT OUTCOME STORY */}
      <section className="py-24 px-6 lg:px-12 bg-absolute-black border-y border-[#4A6FA5]/30">
        <div className="max-w-4xl mx-auto border-l-4 border-[#4A6FA5] pl-8 py-2">
          <p className="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed italic mb-8">
            &quot;Marcus D., a supply chain director with 18 years in the field, packaged his supplier negotiation and vendor vetting process into a $99/month membership for small and mid-size e-commerce brands using The Builder. He now has 67 active members and generates $6,633/month — without consulting calls, without retainers, and without anyone else&apos;s org chart.&quot;
          </p>
          <div className="font-mono text-sm uppercase tracking-widest text-[#4A6FA5] font-bold">
            — Built using The No-Code Product Builder
          </div>
        </div>
      </section>

      {/* 3.7 CHECKOUT/CTA */}
      <section id="checkout" className="py-32 px-6 lg:px-12 bg-off-black text-stark-white border-t border-white/10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16 leading-[0.9]">
            YOUR KNOWLEDGE IS WORTH MORE THAN YOUR HOURLY RATE.
          </h2>
          
          <div className="bg-absolute-black p-8 md:p-12 shadow-2xl mt-12 mb-8 border border-white/20">
            {checkoutSubmitted ? (
              <div className="text-center py-10">
                <Check className="mx-auto text-[#4A6FA5] mb-4" size={48} />
                <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-2">YOU&apos;RE ON THE LIST.</h3>
                <p className="font-serif text-lg text-white/70">Our payment gateway is launching this week. We will email you the secure checkout link as soon as it goes live.</p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-4">
                <div className="font-sans font-bold text-center text-xl uppercase tracking-tighter mb-4 text-[#4A6FA5]">
                  CHECKOUT INTEGRATION PENDING.<br/>RESERVE YOUR ACCESS NOW.
                </div>
                <input 
                  required
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full border border-white/20 bg-stark-white text-absolute-black p-4 font-sans focus:outline-none focus:border-[#4A6FA5]"
                  value={checkoutForm.name}
                  onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border border-white/20 bg-stark-white text-absolute-black p-4 font-sans focus:outline-none focus:border-[#4A6FA5]"
                  value={checkoutForm.email}
                  onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                />
                <button type="submit" className="bg-[#4A6FA5] text-stark-white w-full py-6 font-mono text-lg font-bold uppercase tracking-widest hover:bg-[#355380] transition-colors mt-2">
                  ENROLL IN THE BUILDER — $797
                </button>
              </form>
            )}
          </div>
          
          <div className="font-mono text-sm uppercase tracking-widest text-[#4A6FA5] font-bold">
            Pay once, access for life.
            <span className="block font-serif text-base mt-2 normal-case font-normal text-stark-white/60">30-day money-back guarantee. No questions asked.</span>
          </div>

          <div className="mt-16 text-stark-white/50 font-serif italic text-lg">
            Not ready? 
            <Link href="/blueprint" className="ml-3 font-mono text-xs not-italic tracking-widest uppercase border-b border-stark-white/50 text-stark-white/80 pb-0.5 hover:text-white hover:border-white transition-opacity font-bold">
              [ Start with The Blueprint — $79 ]
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
