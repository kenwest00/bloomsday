"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

// Cache bust: force clean rebuild
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
    {
      category: "The Programs",
      q: "How much time does each program require?",
      a: "The Blueprint is designed to be completed in a focused weekend — approximately 8 to 10 hours across Saturday and Sunday. The Builder is a 10-week self-paced program; most students invest 4 to 6 hours per week. The Accelerator requires 5 to 8 hours per week across the six-week cohort, including the two-hour live weekly session."
    },
    {
      category: "The Programs",
      q: "Is there a community included?",
      a: "Yes. Builder students receive access to the Bloomsday Builder Community, a Slack-based peer network of professionals building digital products across industries. Accelerator students receive access to a private cohort channel during the program and lifetime access to the Accelerator alumni network after it concludes."
    },
    {
      category: "The Modern Software Stack",
      q: "I am not technical at all. Can I still do this?",
      a: "Yes. The modern software stack does not require any programming knowledge. You do not need to understand how software is built — you need to understand which tools do which jobs and how to connect them. Ken\"s instruction is designed for domain experts, not technologists. The methodology treats software as architecture: you are the architect, not the construction crew."
    },
    {
      category: "The Modern Software Stack",
      q: "What tools will I learn to use?",
      a: "The Builder curriculum covers the core modern software stack for digital product creation and delivery: Notion or similar for content structuring, Gumroad or Lemon Squeezy for payments and delivery, Beehiiv or ConvertKit for email, Webflow for product pages, Zapier for automation, and Airtable for data management. You will not use all of them for every product — the curriculum teaches you to choose the right tool for your specific product type."
    },
    {
      category: "The Modern Software Stack",
      q: "Will I actually own what I build?",
      a: "Yes. Everything you build in Bloomsday — your product, your storefront, your automations, your customer list — belongs to you. Bloomsday does not take a percentage of your revenue, does not host your product on a proprietary platform that can be shut down, and does not require any ongoing relationship with us to keep your product running."
    },
    {
      category: "The Accelerator",
      q: "What happens if I miss a live session?",
      a: "All live sessions are recorded and made available to cohort members within 24 hours. We strongly encourage attendance at every session — the accountability and live feedback are the core value of the Accelerator format. But life happens, and recordings ensure you never fall behind."
    },
    {
      category: "The Accelerator",
      q: "What is the application process for the Accelerator?",
      a: "Submit your application via the /accelerator page. We review applications within 48 hours and will ask you a small number of questions about your domain expertise and your product concept (or the area you are exploring). Not everyone who applies is accepted — the Accelerator works because every cohort member is genuinely ready to build. If you are not accepted for this cohort, we will give you specific guidance on what to complete before the next one."
    },
    {
      category: "The Accelerator",
      q: "Can I do the Accelerator if I have not done The Blueprint or The Builder?",
      a: "Yes, with the caveat that Accelerator students who have not completed The Blueprint tend to spend the first week on work that Blueprint students completed before the cohort begins. We recommend completing The Blueprint ($79) before applying to the Accelerator — at minimum, you should have a clear idea of your domain expertise and a working concept for your product."
    },
    {
      category: "The Accelerator",
      q: "What if I don\"t make a sale during the cohort?",
      a: "Our goal is for every Accelerator student to make at least one sale before the six weeks end. That said, sales are a function of your product, your network, and your execution — not a guarantee we can make. What we can guarantee is that you will leave the cohort with a live, launched product and the complete infrastructure to generate revenue. Most students make their first sale during Week 5 of the cohort."
    },
    {
      category: "Guarantees & Refunds",
      q: "Is there a refund policy?",
      a: "The Blueprint and The Builder both come with a 30-day money-back guarantee. If you complete the curriculum and do not feel it delivered the value promised, contact us within 30 days of purchase and we will refund you in full — no questions asked. The Accelerator has a different policy given the live cohort format: full refunds are available up to 7 days before the cohort start date. After that, we offer a full credit toward a future cohort."
    },
    {
      category: "Guarantees & Refunds",
      q: "What if I buy The Blueprint and decide not to continue?",
      a: "That is completely fine. The Blueprint is designed to stand alone — you will leave with a complete product blueprint and launch roadmap that you can execute on your own schedule, with or without continuing to The Builder. If you choose to upgrade to The Builder within 90 days of completing The Blueprint, we will credit the $79 toward your Builder enrollment."
    },
    {
      category: "Results & Expectations",
      q: "How long does it take to start making money?",
      a: "It depends on which program you start with and how quickly you execute. Blueprint students who move directly into The Builder and follow the launch curriculum typically see their first sale within 10 to 14 weeks of starting. Accelerator students are structured to launch within six weeks and make their first sale during the cohort. There is no universal timeline — your results depend on your expertise, your network, and your execution."
    },
    {
      category: "Results & Expectations",
      q: "What types of products do Bloomsday students typically build?",
      a: "Students have built self-paced courses, downloadable guides and playbooks, diagnostic tools and assessments, membership communities with curated content, template libraries, and hybrid products that combine multiple formats. The right format depends on your expertise and your buyer — the Blueprint and Builder both guide you through that decision systematically."
    },
    {
      category: "Results & Expectations",
      q: "Is this only for people who want to quit their jobs?",
      a: "No. Many Bloomsday students build digital products while continuing full-time employment. A scalable digital product can function as a supplemental income stream, a credibility-building platform, or the foundation for an eventual transition — on your timeline, not anyone else\"s. The framework works in all three scenarios."
    }
  ];

  return (
    <>
      {/* 1. HERO — ABOVE THE FOLD */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032373885/IneEiccuPzuOCAys.jpg"
          alt="Professional expert at desk"
          fill
          className="object-cover object-right opacity-70"
          priority
          unoptimized
        />
        <div 
          className="absolute inset-0 z-1 bg-gradient-to-r from-absolute-black/80 via-absolute-black/40 to-transparent"
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
              You have spent a decade — maybe two — becoming one of the best in your field. Bloomsday is the system for converting that judgment into an asset that earns without you in the room.
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
              THE CAPPED EXECUTIVE.
            </p>
            <p className="mb-8">
              Your title has stopped buying you leverage. Every promotion adds obligation, not optionality. You are senior enough to see the ceiling and junior enough to be inside it.
            </p>
            <p className="mb-8 font-bold font-sans text-xl uppercase tracking-widest text-signal-orange">
              THE EXHAUSTED CONSULTANT.
            </p>
            <p className="mb-8">
              You have given the same explanation one hundred times. Every new engagement starts from zero. Your calendar is the bottleneck, and your calendar is finite.
            </p>
            <p className="mb-8 font-bold font-sans text-xl uppercase tracking-widest text-signal-orange">
              THE TECHNICAL OPERATOR.
            </p>
            <p className="mb-8">
              Your expertise only has value inside someone else’s org chart. The day the badge stops working, the market forgets what you know. You have built no asset you can carry out the door.
            </p>
            <p className="mb-8">
              You are not capped because you lack expertise. You are capped because your expertise has no delivery mechanism that works without you in the room.
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
                  THE PRODUCT BUILDER
                </h3>
                <p className="font-serif text-lg text-stark-white/80 mb-8">
                  The comprehensive, self-paced masterclass. You will go from concept to a fully operational, revenue-generating digital product — with automated delivery, a built-in checkout system, and zero engineering team required.
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
                  YOU DO NOT NEED MORE TO READ.<br/>YOU NEED A DEADLINE AND A ROOM FULL OF PEERS WHO WILL HOLD YOU TO IT.
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
            <p className="font-serif text-base text-stark-white/70 mt-4 max-w-3xl mx-auto">
              Results shown are from selected cohort participants. Not every professional who completes Bloomsday launches a revenue-generating product. Most who do report first revenue within 90 days of launch.
            </p>
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
                &quot;The lease negotiation playbook now generates steady revenue from buyers who could never have afforded my hourly rate. The product reaches the market I could not.&quot;
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
              I spent more than two decades inside the world&apos;s largest organizations — building digital products, leading research, designing the systems that millions of people use every day. Along the way, I watched some of the most knowledgeable people I have met hit a ceiling they could not name. Attorneys billing at $800 an hour who could not take a vacation. Engineers whose institutional knowledge was worth millions and compensated in base salary. Healthcare executives whose expertise evaporated the day they changed employers. The ceiling was not talent. It was delivery mechanism. Bloomsday is what I built so the next generation would not have to figure that out alone.
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
