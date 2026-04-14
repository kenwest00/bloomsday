"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Curriculum() {
  return (
    <div className="bg-absolute-black min-h-screen text-absolute-black font-sans pb-32">
      {/* 1.1 PAGE HERO */}
      <section className="pt-40 pb-24 px-6 lg:px-12 text-center text-stark-white max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeInUP} className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            THE PATH FROM EXPERTISE TO INCOME.
          </motion.h1>
          <motion.p variants={fadeInUP} className="font-serif text-xl md:text-2xl italic leading-relaxed text-stark-white/80 max-w-3xl mx-auto">
            Every tier is a complete program. Most students begin with The Blueprint and ascend. All three can be entered independently. Start where you are.
          </motion.p>
        </motion.div>
      </section>

      <div className="bg-stark-white py-24 px-6 lg:px-12">
        {/* 1.2 ASCENSION PATH VISUAL */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-mono text-xs md:text-sm uppercase tracking-widest font-bold">
            
            <div className="flex items-center gap-4 border p-4 w-full md:w-auto" style={{ borderColor: "#C9A84C", color: "#1A1A2D" }}>
              <span className="text-[#C9A84C]">01</span>
              <div>
                <div className="mb-1">THE BLUEPRINT</div>
                <div className="text-[10px] text-[#666666] font-normal lowercase">Identify what to build</div>
              </div>
            </div>

            <div className="text-[#CCCCCC] text-2xl hidden md:block">&rarr;</div>
            <div className="text-[#CCCCCC] text-xl md:hidden">&darr;</div>

            <div className="flex items-center gap-4 border p-4 w-full md:w-auto" style={{ borderColor: "#4A6FA5", color: "#1A1A2D" }}>
              <span className="text-[#4A6FA5]">02</span>
              <div>
                <div className="mb-1">THE BUILDER</div>
                <div className="text-[10px] text-[#666666] font-normal lowercase">Build and launch it</div>
              </div>
            </div>

            <div className="text-[#CCCCCC] text-2xl hidden md:block">&rarr;</div>
            <div className="text-[#CCCCCC] text-xl md:hidden">&darr;</div>

            <div className="flex items-center gap-4 border p-4 w-full md:w-auto" style={{ borderColor: "#B85C3A", color: "#1A1A2D" }}>
              <span className="text-[#B85C3A]">03</span>
              <div>
                <div className="mb-1">THE ACCELERATOR</div>
                <div className="text-[10px] text-[#666666] font-normal lowercase">Launch with a deadline + peers</div>
              </div>
            </div>

          </div>
        </section>

        {/* 1.3 TIER COMPARISON TABLE */}
        <section className="max-w-6xl mx-auto mb-32 overflow-x-auto pb-6">
          <table className="w-full min-w-[800px] border-collapse text-left font-sans text-sm md:text-base border border-[#E8E8E8]">
            <thead>
              <tr className="bg-[#FFFFFF]">
                <th className="p-6 w-[20%] border-r border-b border-[#E8E8E8]"></th>
                <th className="p-6 w-[26%] border-r border-b border-[#E8E8E8] text-center font-bold uppercase tracking-widest text-[#C9A84C]">
                  THE BLUEPRINT
                </th>
                <th className="p-6 w-[26%] border-r border-b border-[#E8E8E8] text-center font-bold uppercase tracking-widest text-[#1A1A2D] bg-[#FAFAF8] relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]"></div>
                  <div className="text-[10px] text-[#C9A84C] mb-2">★ MOST POPULAR</div>
                  THE BUILDER
                </th>
                <th className="p-6 w-[26%] border-b border-[#E8E8E8] text-center font-bold uppercase tracking-widest text-[#B85C3A]">
                  THE ACCELERATOR
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row: Price */}
              <tr className="bg-[#FAFAFA]">
                <td className="p-6 font-bold text-[#1A1A2D] border-r border-b border-[#E8E8E8]">Price</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8]">$79</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8] bg-[#FAFAF8]">$797</td>
                <td className="p-6 text-center border-b border-[#E8E8E8]">$3,000</td>
              </tr>
              {/* Row: Format */}
              <tr className="bg-[#FFFFFF]">
                <td className="p-6 font-bold text-[#1A1A2D] border-r border-b border-[#E8E8E8]">Format</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8]">Weekend program</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8] bg-[#FAFAF8]">Self-paced &middot; 10 weeks</td>
                <td className="p-6 text-center border-b border-[#E8E8E8]">Live cohort &middot; 6 weeks</td>
              </tr>
              {/* Row: Time commitment */}
              <tr className="bg-[#FAFAFA]">
                <td className="p-6 font-bold text-[#1A1A2D] border-r border-b border-[#E8E8E8]">Time commitment</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8]">8–10 hours total</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8] bg-[#FAFAF8]">4–6 hrs/week</td>
                <td className="p-6 text-center border-b border-[#E8E8E8]">5–8 hrs/week</td>
              </tr>
              {/* Row: You leave with */}
              <tr className="bg-[#FFFFFF]">
                <td className="p-6 font-bold text-[#1A1A2D] border-r border-b border-[#E8E8E8]">You leave with</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8]">Product blueprint + launch roadmap</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8] bg-[#FAFAF8]">Live, revenue-generating product</td>
                <td className="p-6 text-center border-b border-[#E8E8E8]">Launched product + first customer</td>
              </tr>
              {/* Row: Best for */}
              <tr className="bg-[#FAFAFA]">
                <td className="p-6 font-bold text-[#1A1A2D] border-r border-b border-[#E8E8E8]">Best for</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8]">Gaining clarity on what to build</td>
                <td className="p-6 text-center border-r border-b border-[#E8E8E8] bg-[#FAFAF8]">Building on your own schedule</td>
                <td className="p-6 text-center border-b border-[#E8E8E8]">Building with a deadline + accountability</td>
              </tr>
              {/* Row: CTA Label Texts */}
              <tr className="bg-[#FFFFFF]">
                <td className="p-6 border-r border-[#E8E8E8]"></td>
                <td className="p-6 text-center border-r border-[#E8E8E8] font-bold text-[#C9A84C] text-[12px] uppercase tracking-widest">GET THE BLUEPRINT — $79</td>
                <td className="p-6 text-center border-r border-[#E8E8E8] bg-[#FAFAF8] font-bold text-[#1A1A2D] text-[12px] uppercase tracking-widest">ENROLL IN THE BUILDER — $797</td>
                <td className="p-6 text-center border-[#E8E8E8] font-bold text-[#B85C3A] text-[12px] uppercase tracking-widest">APPLY FOR THE ACCELERATOR</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 1.4 TIER CARDS (REDESIGNED) */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* TIER 1 CARD */}
            <div className="group bg-[#FFFFFF] border border-[#E8E8E8] rounded-[2px] relative flex flex-col pt-[28px] pr-[28px] pb-[24px] pl-[32px] transition-all duration-300 hover:bg-[#FAFAF8]" style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"}>
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#C9A84C]"></div>
              
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#C9A84C] font-bold mb-6">
                [ TIER 1 — $79 ]
              </div>
              <h3 className="font-sans text-[22px] md:text-[24px] font-bold uppercase tracking-tight text-[#1A1A2D] mb-4">
                THE DIGITAL PRODUCT BLUEPRINT
              </h3>
              <p className="font-serif text-[14px] md:text-[15px] leading-relaxed text-[#444444] mb-8">
                A focused weekend curriculum that ends the planning and starts the building. You will identify the exact slice of your domain knowledge with the highest product-market fit, design your first product&apos;s structure, and leave with a launch roadmap — not a vague intention.
              </p>
              
              <div className="mb-10 flex-grow">
                <div className="font-sans font-bold text-[#1A1A2D] uppercase tracking-tight text-[13px] mb-4">What you leave with:</div>
                <ul className="space-y-3 font-serif text-[14px] md:text-[15px] text-[#444444]">
                  <li className="flex gap-2">
                    <span className="text-[#C9A84C]">&bull;</span>
                    Your Domain Leverage Audit — scored and prioritized
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9A84C]">&bull;</span>
                    Your Product Architecture Map — format, pricing, and delivery mechanism defined
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9A84C]">&bull;</span>
                    Your 90-Day Launch Roadmap — week by week, milestone by milestone
                  </li>
                </ul>
              </div>

              <Link href="/blueprint" className="block w-full bg-[#C9A84C] text-white font-sans font-bold uppercase tracking-widest text-center py-4 rounded-[2px] transition-opacity hover:opacity-90">
                GET THE BLUEPRINT — $79
              </Link>
            </div>

            {/* TIER 2 CARD */}
            <div className="group bg-[#FFFFFF] border border-[#E8E8E8] rounded-[2px] relative flex flex-col pt-[28px] pr-[28px] pb-[24px] pl-[32px] transition-all duration-300 hover:bg-[#FAFAF8]" onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"}>
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#4A6FA5]"></div>
              
              <div className="flex flex-col mb-6">
                <div className="font-mono text-[#C9A84C] text-[11px] mb-1 font-bold uppercase tracking-widest">★ MOST POPULAR</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#4A6FA5] font-bold">
                  [ TIER 2 — $797 ]
                </div>
              </div>
              <h3 className="font-sans text-[22px] md:text-[24px] font-bold uppercase tracking-tight text-[#1A1A2D] mb-4">
                THE NO-CODE PRODUCT BUILDER
              </h3>
              <p className="font-serif text-[14px] md:text-[15px] leading-relaxed text-[#444444] mb-8">
                The comprehensive, self-paced masterclass on the modern no-code stack. You will go from concept to a fully operational, revenue-generating digital product — with automated delivery, a checkout system connected to your bank account, and zero code required. Most students make their first sale before the course ends.
              </p>
              
              <div className="mb-10 flex-grow">
                <div className="font-sans font-bold text-[#1A1A2D] uppercase tracking-tight text-[13px] mb-4">What you leave with:</div>
                <ul className="space-y-3 font-serif text-[14px] md:text-[15px] text-[#444444]">
                  <li className="flex gap-2">
                    <span className="text-[#4A6FA5]">&bull;</span>
                    A live digital product available for purchase
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#4A6FA5]">&bull;</span>
                    An automated delivery and payment system that runs without you
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#4A6FA5]">&bull;</span>
                    Lifetime access to all curriculum updates and the Builder Community
                  </li>
                </ul>
              </div>

              <Link href="/builder" className="block w-full bg-[#4A6FA5] text-white font-sans font-bold uppercase tracking-widest text-center py-4 rounded-[2px] transition-opacity hover:opacity-90">
                ENROLL IN THE BUILDER — $797
              </Link>
            </div>

            {/* TIER 3 CARD */}
            <div className="group bg-[#FFFFFF] border border-[#E8E8E8] rounded-[2px] relative flex flex-col pt-[28px] pr-[28px] pb-[24px] pl-[32px] transition-all duration-300 hover:bg-[#FAFAF8]" onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"}>
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#B85C3A]"></div>
              
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#B85C3A] font-bold mb-6">
                [ TIER 3 — $3,000 ]
              </div>
              <h3 className="font-sans text-[22px] md:text-[24px] font-bold uppercase tracking-tight text-[#1A1A2D] mb-4">
                THE BLOOMSDAY ACCELERATOR
              </h3>
              <p className="font-serif text-[14px] md:text-[15px] leading-relaxed text-[#444444] mb-8">
                A live, six-week cohort for professionals who are done waiting. Limited to 15 per session. You will build and launch a revenue-generating digital product with direct guidance from Ken West and a cohort of peers who operate at your level. Most students make their first sale before the cohort ends.
              </p>
              
              <div className="mb-10 flex-grow">
                <div className="font-sans font-bold text-[#1A1A2D] uppercase tracking-tight text-[13px] mb-4">What you leave with:</div>
                <ul className="space-y-3 font-serif text-[14px] md:text-[15px] text-[#444444]">
                  <li className="flex gap-2">
                    <span className="text-[#B85C3A]">&bull;</span>
                    A launched, revenue-generating product — not a draft
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#B85C3A]">&bull;</span>
                    Ken West&apos;s direct feedback on your product, pricing, and positioning
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#B85C3A]">&bull;</span>
                    Lifetime access to the Accelerator alumni network
                  </li>
                </ul>
              </div>

              <div>
                <Link href="/accelerator" className="block w-full bg-[#B85C3A] text-white font-sans font-bold uppercase tracking-widest text-center py-4 rounded-[2px] transition-opacity hover:opacity-90 mb-4">
                  APPLY FOR THE ACCELERATOR
                </Link>
                <div className="font-mono text-[10px] text-center uppercase tracking-widest text-[#1A1A2D]/60 whitespace-nowrap overflow-hidden text-clip">
                  MAY 2026  &middot;  2 SESSIONS  &middot;  24 SEATS REMAINING
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 1.5 SOCIAL PROOF OUTCOME STRIP (Task 12) */}
        <section className="max-w-6xl mx-auto border-t border-[#E8E8E8] pt-24 pb-12">
          <div className="mb-12">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-[#1A1A2D] mb-2">
              WHAT GETS BUILT.
            </h2>
            <p className="font-serif italic text-lg text-[#666666]">
              Real professionals. Real products. Real revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blueprint Case */}
            <div className="bg-[#FAFAF8] p-8 border border-[#E8E8E8]">
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#C9A84C] mb-4">
                [ BLUEPRINT ]
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1A1A2D] mb-4">
                Donna M. — Healthcare Compliance
              </h3>
              <p className="font-serif text-[#444444] mb-6">
                Built a $349 audit readiness course. $13,960 revenue in the first 90 days.
              </p>
              <Link href="/#story" className="font-mono text-xs uppercase tracking-widest text-[#C9A84C] hover:opacity-70 transition-opacity font-bold">
                Read the full story &rarr;
              </Link>
            </div>

            {/* Builder Case */}
            <div className="bg-[#FAFAF8] p-8 border border-[#E8E8E8]">
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#4A6FA5] mb-4">
                [ BUILDER ]
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1A1A2D] mb-4">
                Marcus D. — Supply Chain Director
              </h3>
              <p className="font-serif text-[#444444] mb-6">
                Built a $99/month membership community. 67 active members generating $6,633/month.
              </p>
              <Link href="/#story" className="font-mono text-xs uppercase tracking-widest text-[#4A6FA5] hover:opacity-70 transition-opacity font-bold">
                Read the full story &rarr;
              </Link>
            </div>

            {/* Accelerator Case */}
            <div className="bg-[#FAFAF8] p-8 border border-[#E8E8E8]">
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#B85C3A] mb-4">
                [ ACCELERATOR ]
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1A1A2D] mb-4">
                Adriana V. — Immigration Attorney
              </h3>
              <p className="font-serif text-[#444444] mb-6">
                Built an H-1B visa prep course in 6 weeks. $4,000–$6,000/month, fully passive.
              </p>
              <Link href="/#story" className="font-mono text-xs uppercase tracking-widest text-[#B85C3A] hover:opacity-70 transition-opacity font-bold">
                Read the full story &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
