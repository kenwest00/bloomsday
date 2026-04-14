"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Animations
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
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "About Bloomsday",
      q: "What exactly is Bloomsday?",
      a: "Bloomsday is a methodology and curriculum for senior professionals who want to convert their domain expertise into a scalable digital product — a course, a tool, a guide, a membership, or a diagnostic — that earns income without requiring their direct time on every transaction. It is not a business school. It is not a freelancing platform. It is a framework for building leverage."
    },
    {
      category: "About Bloomsday",
      q: "Who is this for?",
      a: "Bloomsday is designed specifically for professionals with 10 or more years of deep experience in a single domain. The methodology is built on the premise that your expertise is your unfair advantage — and that most experienced professionals lack not the knowledge but the framework to productize it. If you have spent a decade becoming excellent at something, this program is for you."
    },
    {
      category: "About Bloomsday",
      q: "Who created Bloomsday?",
      a: "Bloomsday was built by Ken West, a digital product strategist and UX architect with more than 20 years of experience building platforms and experiences for Apple, Google, Home Depot, AT&T, PepsiCo, Stanley Black & Decker, State Farm, and IHG. Ken has also served as a published author, a former university vice president, and an entrepreneur across multiple industries. He built Bloomsday to solve a problem he watched brilliant professionals face over and over: they had the expertise, but lacked the delivery mechanism."
    },
    {
      category: "The Programs",
      q: "What is the difference between the three tiers?",
      a: "The Blueprint ($79) is a weekend-long program designed to help you identify and design your first digital product concept. It ends with a complete product blueprint and a launch roadmap. The Builder ($797) is the full, self-paced masterclass that takes you from blueprint to a live, launched, revenue-generating product. The Accelerator ($3,000) is a live, six-week cohort where you build and launch with direct guidance from Ken West and a peer cohort — with a deadline and accountability structure built in."
    },
    {
      category: "The Programs",
      q: "Do I have to do the tiers in order?",
      a: "No. Each tier is a complete program and can be entered independently. That said, students who begin with The Blueprint and ascend tend to move faster in the Builder and Accelerator because they have already done the foundational product thinking. If you already have a clear product concept, you can enter the Builder directly."
    },
  ];

  return (
    <>
      {/* 1. HERO — ABOVE THE FOLD */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/architecture.png')" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center pt-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="font-sans text-[clamp(2.5rem,7vw,8rem)] leading-[0.9] font-bold tracking-tight uppercase mb-8"
          >
            YOUR EXPERTISE<br/>IS THE PRODUCT.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="font-serif text-xl md:text-3xl italic text-stark-white/80 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            You have spent a decade — maybe two — becoming one of the best in your field. 
            Now learn the framework to stop selling your time and start selling your knowledge.
          </motion.p>
          
          <motion.div 
            variants={fadeInUP}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono uppercase tracking-widest text-sm w-full sm:w-auto"
          >
            <Link 
              href="/blueprint" 
              className="bg-stark-white text-absolute-black px-10 py-5 font-bold hover:bg-stark-white/80 transition-colors w-full sm:w-auto text-center"
            >
              START WITH THE BLUEPRINT — $79
            </Link>
            <Link 
              href="/curriculum" 
              className="border border-stark-white text-stark-white px-10 py-5 hover:bg-stark-white hover:text-absolute-black transition-colors w-full sm:w-auto text-center"
            >
              EXPLORE THE CURRICULUM
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENT */}
      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12 border-t-8 border-signal-orange">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16"
        >
          <motion.div variants={fadeInUP} className="md:col-span-5">
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none md:sticky md:top-32">
              THE BILLABLE HOUR IS A BEAUTIFUL TRAP.
            </h2>
          </motion.div>
          <motion.div variants={fadeInUP} className="md:col-span-7 font-serif text-2xl md:text-3xl leading-relaxed">
            <p className="mb-8 font-bold font-sans text-xl uppercase tracking-widest text-signal-orange">
              You are competent. You are compensated. You are completely capped.
            </p>
            <p className="mb-8">
              Every engagement starts from scratch. Every new client requires the same explanation you have given a hundred times before. Your income is linear because your delivery is manual — and you are the only variable.
            </p>
            <p className="mb-8">
              You are not capped because you lack expertise. You are capped because your expertise has no delivery mechanism that works without you in the room.
            </p>
            <p className="font-bold underline decoration-signal-orange decoration-4 underline-offset-8">
              Bloomsday is the framework for changing that.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. PROOF BAR */}
      <section className="bg-signal-orange text-absolute-black py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y-2 md:divide-y-0 md:divide-x-2 divide-absolute-black/20 text-center">
          <div className="pt-8 md:pt-0">
            <div className="font-sans text-6xl font-bold tracking-tighter mb-2">10,000+</div>
            <div className="font-mono text-sm uppercase tracking-widest font-bold">Professionals on the Private List</div>
          </div>
          <div className="pt-8 md:pt-0">
            <div className="font-sans text-6xl font-bold tracking-tighter mb-2">20+</div>
            <div className="font-mono text-sm uppercase tracking-widest font-bold">Years of Enterprise Product Experience</div>
          </div>
          <div className="pt-8 md:pt-0">
            <div className="font-sans text-6xl font-bold tracking-tighter mb-2">3 Tiers</div>
            <div className="font-mono text-sm uppercase tracking-widest font-bold">From First Framework to Fully Launched</div>
          </div>
        </div>
      </section>

      {/* 4. TIER CARDS */}
      <section className="bg-absolute-black py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUP}
            className="mb-20"
          >
            <h2 className="font-sans text-4xl tracking-widest uppercase mb-4 text-stark-white">THE PATH FROM EXPERTISE TO INCOME.</h2>
            <p className="font-serif text-2xl text-stark-white/70 max-w-3xl">
              Every tier is a complete program. Most students begin with The Blueprint and ascend. All three can be entered independently.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* TIER 1 */}
            <motion.div variants={fadeInUP} className="border border-white/20 p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-signal-orange mb-6 uppercase tracking-widest">
                  TIER 1 — $79
                </div>
                <h3 className="font-sans text-3xl mb-4 font-bold uppercase tracking-tight text-stark-white">
                  THE DIGITAL PRODUCT BLUEPRINT
                </h3>
                <p className="font-serif text-lg text-stark-white/80 mb-8">
                  A focused weekend curriculum. You will identify the exact slice of your domain knowledge that has the highest product-market fit, map your first digital product structure, and leave with a launch-ready concept — not a vague idea.
                </p>
                <div className="font-sans text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-2 mb-4">What you will walk away with:</div>
                <ul className="font-serif text-stark-white/80 space-y-3 mb-10 list-disc pl-5">
                  <li>Your Domain Leverage Audit — scored and prioritized</li>
                  <li>Your Product Architecture Map — format, pricing, delivery</li>
                  <li>Your 90-Day Launch Roadmap</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/blueprint" className="block text-center bg-stark-white text-absolute-black font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-stark-white/90">
                  GET THE BLUEPRINT — $79
                </Link>
                <Link href="/blueprint" className="block text-center border border-stark-white text-stark-white font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-stark-white hover:text-absolute-black">
                  SEE WHAT&apos;S INSIDE
                </Link>
              </div>
            </motion.div>

            {/* TIER 2 */}
            <motion.div variants={fadeInUP} className="border border-white/20 p-10 flex flex-col justify-between lg:-translate-y-8 bg-off-black relative">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-signal-orange"></div>
              <div>
                <div className="font-mono text-xs text-signal-orange mb-6 uppercase tracking-widest">
                  TIER 2 — $797
                </div>
                <h3 className="font-sans text-3xl mb-4 font-bold uppercase tracking-tight text-stark-white">
                  THE NO-CODE PRODUCT BUILDER
                </h3>
                <p className="font-serif text-lg text-stark-white/80 mb-8">
                  The comprehensive, self-paced masterclass. You will go from concept to a fully operational, revenue-generating digital product — with automated delivery, a built-in checkout system, and zero code required.
                </p>
                <div className="font-sans text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-2 mb-4">What you will walk away with:</div>
                <ul className="font-serif text-stark-white/80 space-y-3 mb-10 list-disc pl-5">
                  <li>A live, revenue-ready digital product</li>
                  <li>An automated delivery and payment system</li>
                  <li>Lifetime access to all course updates</li>
                  <li>Access to the Bloomsday Builder Community</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/builder" className="block text-center bg-signal-orange text-stark-white font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-orange-600">
                  BUILD YOUR PRODUCT — $797
                </Link>
                <Link href="/builder" className="block text-center border border-stark-white text-stark-white font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-stark-white hover:text-absolute-black">
                  VIEW FULL CURRICULUM
                </Link>
              </div>
            </motion.div>

            {/* TIER 3 */}
            <motion.div variants={fadeInUP} className="border border-white/20 p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-signal-orange mb-6 uppercase tracking-widest">
                  TIER 3 — $3,000
                </div>
                <h3 className="font-sans text-3xl mb-4 font-bold uppercase tracking-tight text-stark-white">
                  THE BLOOMSDAY ACCELERATOR
                </h3>
                <p className="font-serif text-lg text-stark-white/80 mb-8">
                  A live, 6-week cohort program. Limited to 15 professionals per session. You will build, launch, and begin scaling your product with direct access to Ken West and a cohort of peers at your level.
                </p>
                <div className="font-sans text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-2 mb-4">What you will walk away with:</div>
                <ul className="font-serif text-stark-white/80 space-y-3 mb-10 list-disc pl-5">
                  <li>A launched, revenue-generating product</li>
                  <li>A paid customer or client before the cohort ends</li>
                  <li>Ken West&apos;s direct feedback on your positioning</li>
                  <li>Lifetime access to the Accelerator alumni network</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/accelerator" className="block text-center border-2 border-stark-white text-absolute-black bg-stark-white font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-transparent hover:text-stark-white">
                  APPLY FOR THE ACCELERATOR
                </Link>
                <Link href="/accelerator" className="block text-center border border-stark-white text-stark-white font-mono text-sm font-bold uppercase py-4 transition-colors hover:bg-stark-white hover:text-absolute-black">
                  SEE COHORT DETAILS
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. STUDENT OUTCOME STORIES */}
      <section className="bg-stark-white py-32 px-6 lg:px-12 text-absolute-black border-y border-off-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:text-center">
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">WHAT HAPPENS WHEN EXPERTISE MEETS A FRAMEWORK.</h2>
            <p className="font-mono text-sm tracking-widest uppercase text-signal-orange font-bold">Real professionals. Real products. Real revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Story 1 */}
            <div className="border-l-4 border-signal-orange pl-8 py-4">
              <div className="font-mono text-xs font-bold tracking-widest text-off-black/60 uppercase mb-4">
                DONNA M. | HEALTHCARE COMPLIANCE DIRECTOR | 16 YEARS
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                &quot;I had been the person every hospital system called when they needed help navigating CMS audit preparation. I charged by the hour, I was booked six months out, and I was exhausted. Bloomsday helped me build a self-paced audit readiness course in eight weeks... I made more in those 90 days than I had in any single quarter in my career.&quot;
              </p>
              <div className="bg-off-black/5 p-6 font-mono text-sm border border-off-black/10">
                <span className="font-bold">Product built:</span> CMS Audit Readiness Course<br/>
                <span className="font-bold">Rev in first 90 days:</span> $13,960<br/>
                <span className="font-bold">Time to launch:</span> 8 weeks
              </div>
            </div>

            {/* Story 2 */}
            <div className="border-l-4 border-signal-orange pl-8 py-4">
              <div className="font-mono text-xs font-bold tracking-widest text-off-black/60 uppercase mb-4">
                RAYMOND T. | COMMERCIAL REAL ESTATE BROKER | 22 YEARS
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                &quot;The problem was, the people who needed me most could not afford my hourly rate. I built a lease negotiation playbook — a $197 digital guide — using the Blueprint framework. I had 80 buyers in the first month. Now I wake up to Stripe notifications instead of another contract to review.&quot;
              </p>
              <div className="bg-off-black/5 p-6 font-mono text-sm border border-off-black/10">
                <span className="font-bold">Product built:</span> The Commercial Lease Negotiation Playbook<br/>
                <span className="font-bold">Rev in first 30 days:</span> $15,760<br/>
                <span className="font-bold">Time to launch:</span> 11 days
              </div>
            </div>

            {/* Story 3 */}
            <div className="border-l-4 border-absolute-black pl-8 py-4">
              <div className="font-mono text-xs font-bold tracking-widest text-off-black/60 uppercase mb-4">
                ADRIANA V. | IMMIGRATION ATTORNEY | 14 YEARS
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                &quot;The Accelerator forced me to stop planning and start building. By week four, I had a live product — a $249 self-paced visa prep course. By week six, I had 28 paying customers. The course now brings in $4,000 to $6,000 a month passively. It is the most important thing I have built.&quot;
              </p>
              <div className="bg-off-black/5 p-6 font-mono text-sm border border-off-black/10">
                <span className="font-bold">Product built:</span> H-1B Visa Prep Course<br/>
                <span className="font-bold">Monthly Recurring Rev:</span> $4,000 – $6,000<br/>
                <span className="font-bold">Time to launch:</span> 6 weeks
              </div>
            </div>

            {/* Story 4 */}
            <div className="border-l-4 border-absolute-black pl-8 py-4">
              <div className="font-mono text-xs font-bold tracking-widest text-off-black/60 uppercase mb-4">
                MARCUS D. | SUPPLY CHAIN DIRECTOR | 18 YEARS
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                &quot;My expertise only had value inside someone else&apos;s org chart. The Builder program changed that completely. I packaged my supplier negotiation process into a $99/month membership for e-commerce brands. I now have 67 active members. The framework made it obvious.&quot;
              </p>
              <div className="bg-off-black/5 p-6 font-mono text-sm border border-off-black/10">
                <span className="font-bold">Product built:</span> The Vendor Vault<br/>
                <span className="font-bold">Monthly Recurring Rev:</span> $6,633<br/>
                <span className="font-bold">Time to launch:</span> 14 weeks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="bg-off-black py-32 px-6 lg:px-12 text-stark-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/20 bg-absolute-black">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="font-sans text-xl font-bold uppercase">{faq.q}</span>
                  {openFaqIndex === idx ? <Minus className="text-signal-orange" size={24} /> : <Plus className="text-stark-white" size={24} />}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-2 font-serif text-lg text-stark-white/80 leading-relaxed border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="font-mono text-sm tracking-widest uppercase border-b border-stark-white pb-1 hover:text-signal-orange hover:border-signal-orange transition-all">
              View All Questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. THE FOUNDER IDENTITY */}
      <section className="bg-absolute-black text-stark-white py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mock Photo Block */}
          <div className="aspect-[3/4] bg-off-black border-2 border-white/10 relative flex items-center justify-center grayscale overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-absolute-black via-transparent to-transparent opacity-80 z-10"></div>
            {/* Using text placeholder to adhere to Brutalism until a real photo is uploaded */}
            <div className="font-mono text-xs text-white/50 z-20 font-bold uppercase tracking-widest text-center px-10">
              [ HEADSHOT PLACEHOLDER ]<br/>KEN WEST
            </div>
          </div>
          
          <div>
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">KEN WEST</h2>
            <div className="font-mono text-sm text-signal-orange tracking-widest uppercase mb-12 border-b border-white/10 pb-6">
              Founder, Bloomsday | UX Strategist | Digital Product Architect
            </div>
            
            <div className="font-serif text-2xl leading-relaxed italic text-white/90 mb-10 relative">
              <span className="absolute -left-8 -top-4 text-6xl text-white/20 font-sans">&quot;</span>
              I spent more than two decades inside the world&apos;s largest organizations — building digital products, leading research, designing the systems that millions of people use every day. Along the way, I watched some of the most knowledgeable people I have ever met hit an invisible ceiling. Brilliant attorneys. Senior engineers. Healthcare executives. They could not scale. Not because they lacked talent, but because no one had ever shown them how to turn what they knew into something that worked without them. Bloomsday is what I built so they would never have to figure that out alone.
            </div>
            <Link href="/about" className="font-mono text-sm tracking-widest uppercase border-b border-stark-white pb-1 hover:text-signal-orange hover:border-signal-orange transition-all inline-block">
              Read the Full Methodology &rarr;
            </Link>
          </div>
        </div>

        {/* LOGO BAR */}
        <div className="max-w-7xl mx-auto mt-32 border-t border-white/20 pt-16">
          <div className="text-center font-mono text-xs uppercase tracking-widest text-white/50 mb-12">
            CLIENTS & COLLABORATORS
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700 font-sans font-bold text-xl md:text-2xl uppercase tracking-tighter">
            <span>Apple</span>
            <span>Google</span>
            <span>Home Depot</span>
            <span>AT&amp;T</span>
            <span>PepsiCo</span>
            <span>Stanley Black &amp; Decker</span>
            <span>State Farm</span>
            <span>IHG</span>
          </div>
        </div>
      </section>
    </>
  );
}
