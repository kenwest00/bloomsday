"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
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

export default function Accelerator() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    industry: "",
    experience: "",
    description: "",
    cohort: "A",
    source: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-absolute-black min-h-screen pb-32 font-sans text-stark-white">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUP} className="font-mono text-signal-orange uppercase tracking-widest text-sm mb-6 font-bold">
            TIER 3 — $3,000
          </motion.div>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            SIX WEEKS. YOUR PRODUCT. LAUNCHED.
          </motion.h1>
          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-4xl mx-auto mb-12 italic">
            The Accelerator is Bloomsday&apos;s live, cohort-based program for senior professionals who are done waiting. You will build and launch a revenue-generating digital product in six weeks — with direct guidance from Ken West and a cohort of peers who operate at your level.
          </motion.p>
          <motion.div variants={fadeInUP}>
            <Link href="#apply" className="inline-block bg-stark-white text-absolute-black font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-white/80 transition-colors shadow-2xl shadow-stark-white/20">
              APPLY FOR THE ACCELERATOR
            </Link>
            <p className="font-mono text-xs uppercase tracking-widest text-stark-white/50 mt-4">Applications are reviewed within 48 hours. Not everyone is accepted.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WARNING / NOT A COURSE */}
      <section className="py-20 px-6 lg:px-12 bg-signal-orange text-absolute-black border-y border-absolute-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              THIS IS NOT A COURSE. IT IS A BUILD.
            </h2>
            <p className="font-serif text-2xl leading-relaxed">
              Every week, your cohort meets live. Every week, you produce something. By week six, you have a launched product and your first customer. The Accelerator is structured around accountability, not information. You do not need more to read. You need a deadline and a room full of people who will hold you to it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. COHORT DETAILS & COUNTER */}
      <section className="py-32 px-6 lg:px-12 bg-stark-white text-absolute-black">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="mb-16 md:text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              MAY 2026 COHORT DETAILS
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest font-bold text-signal-orange">
              TWO SESSIONS — 15 SEATS EACH — STARTING MAY 14, 2026
            </p>
          </motion.div>

          {/* Countdown timer mockup */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP} className="flex justify-center mb-16">
            <div className="flex gap-4 md:gap-8 font-mono text-center">
              <div>
                <div className="text-4xl md:text-6xl font-bold tracking-tighter text-absolute-black">30</div>
                <div className="text-xs font-bold uppercase tracking-widest text-absolute-black/50 mt-2">Days</div>
              </div>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter text-absolute-black/20">:</div>
              <div>
                <div className="text-4xl md:text-6xl font-bold tracking-tighter text-absolute-black">14</div>
                <div className="text-xs font-bold uppercase tracking-widest text-absolute-black/50 mt-2">Hours</div>
              </div>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter text-absolute-black/20">:</div>
              <div>
                <div className="text-4xl md:text-6xl font-bold tracking-tighter text-absolute-black">45</div>
                <div className="text-xs font-bold uppercase tracking-widest text-absolute-black/50 mt-2">Mins</div>
              </div>
            </div>
          </motion.div>

          {/* Cohort Table */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}>
            <div className="overflow-x-auto border border-absolute-black/10">
              <table className="w-full text-left font-sans">
                <thead className="bg-off-black text-stark-white font-mono text-xs uppercase tracking-widest">
                  <tr>
                    <th className="p-4 md:p-6 border-b border-absolute-black/10">Cohort</th>
                    <th className="p-4 md:p-6 border-b border-absolute-black/10">Session Time</th>
                    <th className="p-4 md:p-6 border-b border-absolute-black/10">Start Date</th>
                    <th className="p-4 md:p-6 border-b border-absolute-black/10">Seats Remaining</th>
                  </tr>
                </thead>
                <tbody className="bg-stark-white divide-y divide-absolute-black/10">
                  <tr className="hover:bg-absolute-black/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-lg uppercase tracking-tight">Cohort A</td>
                    <td className="p-4 md:p-6 font-serif text-lg">Thursdays 10:00 AM – 12:00 PM ET (Daytime)</td>
                    <td className="p-4 md:p-6 font-mono text-sm uppercase tracking-widest">May 14, 2026</td>
                    <td className="p-4 md:p-6">
                      <div className="inline-flex items-center gap-2 bg-signal-orange/10 text-signal-orange px-3 py-1 font-mono text-sm font-bold tracking-widest">
                        <span className="relative flex h-2 w-2 mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-orange opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-orange"></span>
                        </span>
                        13 / 15 Available
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-absolute-black/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-lg uppercase tracking-tight">Cohort B</td>
                    <td className="p-4 md:p-6 font-serif text-lg">Thursdays 7:00 PM – 9:00 PM ET (Evening)</td>
                    <td className="p-4 md:p-6 font-mono text-sm uppercase tracking-widest">May 14, 2026</td>
                    <td className="p-4 md:p-6">
                      <div className="inline-flex items-center gap-2 bg-signal-orange/10 text-signal-orange px-3 py-1 font-mono text-sm font-bold tracking-widest">
                        <span className="relative flex h-2 w-2 mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-orange opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-orange"></span>
                        </span>
                        11 / 15 Available
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE SIX-WEEK STRUCTURE */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-stark-white">
            THE SIX-WEEK STRUCTURE
          </h2>
          <div className="w-16 h-1 bg-signal-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { w: "WEEK 1", t: "YOUR PRODUCT, DEFINED", d: "You will finalize your product concept, validate it with real potential buyers, and lock your format and price. No one moves to Week 2 without a confirmed concept." },
            { w: "WEEK 2", t: "YOUR CONTENT, BUILT", d: "You will build the complete content of your product using the Bloomsday Content Architecture framework. Structured. Sequenced. Built for transformation, not just information delivery." },
            { w: "WEEK 3", t: "YOUR STOREFRONT, LIVE", d: "Your product page goes live this week. You will connect your checkout flow and test the full purchase experience. By end of Week 3, someone could find your product and buy it." },
            { w: "WEEK 4", t: "YOUR AUTOMATION, WIRED", d: "You will build the delivery and onboarding system. From this point forward, your product operates without your direct involvement." },
            { w: "WEEK 5", t: "YOUR LAUNCH, EXECUTED", d: "You will execute your first launch to a warm audience. Most Accelerator students make their first sale during Week 5. Your cohort holds you accountable." },
            { w: "WEEK 6", t: "YOUR SCALE FOUNDATION, IN PLACE", d: "You will build the systems that enable growth beyond launch: referral architecture, testimonial collection, and the content-to-sale pipeline that keeps the product selling after launch month." },
          ].map((wk, idx) => (
            <div key={idx} className="border border-white/20 p-8 md:p-10 bg-off-black">
              <div className="font-mono text-signal-orange text-xs font-bold uppercase tracking-widest mb-3">
                {wk.w}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                {wk.t}
              </h3>
              <p className="font-serif text-lg text-white/70 leading-relaxed">
                {wk.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INCLUDED & WHO IS IT FOR */}
      <section className="bg-stark-white text-absolute-black py-24 px-6 lg:px-12 border-t-8 border-signal-orange">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b border-absolute-black/10 pb-4">
              WHAT&apos;S INCLUDED
            </h2>
            <ul className="space-y-4 font-serif text-lg leading-relaxed">
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Six live, 2-hour weekly sessions with Ken West (recorded for replay)</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Direct feedback on your product, positioning, and launch from Ken</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Full access to The No-Code Product Builder curriculum as a reference resource</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> A private cohort Slack channel — your peer group for six weeks</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Lifetime access to the Accelerator alumni network</li>
              <li className="flex items-start gap-3"><Check className="text-signal-orange shrink-0 mt-1" /> Two 1:1 office hours slots with Ken during the cohort</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUP}>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 border-b border-absolute-black/10 pb-4">
              IS THE ACCELERATOR RIGHT FOR YOU?
            </h2>
            <ul className="space-y-4 font-serif text-lg leading-relaxed">
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-signal-orange rounded-full mt-2shrink-0 mt-2"></div> Have 10 or more years of deep domain expertise in any field</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-absolute-black rounded-full mt-2shrink-0 mt-2"></div> Are serious about launching in a defined, compressed timeframe</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-absolute-black rounded-full mt-2shrink-0 mt-2"></div> Respond well to accountability, deadlines, and peer pressure</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-absolute-black rounded-full mt-2shrink-0 mt-2"></div> Are prepared to invest 5 to 8 hours per week for six weeks</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-absolute-black rounded-full mt-2shrink-0 mt-2"></div> Are not looking for more information — you are looking for a deadline and a framework</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. APPLICATION FORM SECTION */}
      <section id="apply" className="py-32 px-6 lg:px-12 bg-off-black relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              SUBMIT YOUR APPLICATION
            </h2>
            <p className="font-serif text-xl italic text-white/70">
              Applications are reviewed within 48 hours. If accepted, you will receive a link to complete enrollment and select your cohort session.
            </p>
          </div>

          <div className="bg-absolute-black border border-white/20 p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-signal-orange text-absolute-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">APPLICATION RECEIVED.</h3>
                <p className="font-serif text-xl text-white/70">We will review your profile and respond within 48 hours via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Industry / Domain</label>
                    <input required type="text" placeholder="e.g. Healthcare Compliance" className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange" value={formState.industry} onChange={e => setFormState({...formState, industry: e.target.value})} />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Years of Experience</label>
                    <select required className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange appearance-none" value={formState.experience} onChange={e => setFormState({...formState, experience: e.target.value})}>
                      <option value="" disabled>Select range</option>
                      <option value="5-9">5-9 Years</option>
                      <option value="10-14">10-14 Years (Target)</option>
                      <option value="15-19">15-19 Years (Target)</option>
                      <option value="20+">20+ Years (Target)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Brief Description of Your Expertise</label>
                  <textarea required rows={4} className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange resize-none" placeholder="What are you known for? What problem do people hire you to solve?" value={formState.description} onChange={e => setFormState({...formState, description: e.target.value})}></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Preferred Cohort</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                        <input type="radio" name="cohort" value="A" checked={formState.cohort === "A"} onChange={e => setFormState({...formState, cohort: e.target.value})} className="accent-signal-orange" />
                        Cohort A (Day)
                      </label>
                      <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                        <input type="radio" name="cohort" value="B" checked={formState.cohort === "B"} onChange={e => setFormState({...formState, cohort: e.target.value})} className="accent-signal-orange" />
                        Cohort B (Evening)
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white/50 mb-2">How did you hear about us?</label>
                    <input required type="text" className="w-full bg-off-black border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-signal-orange" value={formState.source} onChange={e => setFormState({...formState, source: e.target.value})} />
                  </div>
                </div>

                <button type="submit" className="w-full bg-signal-orange text-stark-white font-mono text-lg font-bold uppercase tracking-widest py-6 mt-8 hover:bg-orange-600 transition-colors">
                  APPLY NOW — MAY 2026 COHORT
                </button>
                <div className="text-center mt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                    Questions before applying? Email cohort@bloomsday.co — we respond within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 px-6 lg:px-12 text-center border-t border-absolute-black/20">
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-stark-white">THIRTY SEATS. TWO SESSIONS. YOUR PRODUCT, LAUNCHED IN SIX WEEKS.</h2>
      </section>
    </div>
  );
}
