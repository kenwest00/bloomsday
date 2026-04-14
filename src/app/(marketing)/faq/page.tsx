"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

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
    category: "The No-Code Stack",
    q: "I am not technical at all. Can I still do this?",
    a: "Yes. The no-code stack does not require any programming knowledge. You do not need to understand how software is built — you need to understand which tools do which jobs and how to connect them. Ken's instruction is designed for domain experts, not technologists. The methodology treats software as architecture: you are the architect, not the construction crew."
  },
  {
    category: "The No-Code Stack",
    q: "What tools will I learn to use?",
    a: "The Builder curriculum covers the core no-code stack for digital product creation and delivery: Notion or similar for content structuring, Gumroad or Lemon Squeezy for payments and delivery, Beehiiv or ConvertKit for email, Webflow for product pages, Zapier for automation, and Airtable for data management. You will not use all of them for every product — the curriculum teaches you to choose the right tool for your specific product type."
  },
  {
    category: "The No-Code Stack",
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
    q: "What if I don't make a sale during the cohort?",
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
    a: "No. Many Bloomsday students build digital products while continuing full-time employment. A scalable digital product can function as a supplemental income stream, a credibility-building platform, or the foundation for an eventual transition — on your timeline, not anyone else's. The framework works in all three scenarios."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = Array.from(new Set(faqs.map(item => item.category)));

  return (
    <div className="bg-absolute-black min-h-screen pb-32 text-stark-white pt-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="w-16 h-1 bg-signal-orange mb-8"></div>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/80 max-w-2xl italic">
            Answers to common questions about the methodology, the cohort formats, and the transition from manual work to scalable income.
          </p>
        </motion.div>

        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h2 className="font-mono text-sm tracking-widest text-signal-orange uppercase font-bold mb-6 border-b border-white/10 pb-2">
              {category}
            </h2>
            <div className="space-y-4">
              {faqs.filter(item => item.category === category).map((faq, index) => {
                const globalIndex = faqs.findIndex(f => f.q === faq.q);
                return (
                  <div key={globalIndex} className="bg-off-black border border-white/20">
                    <button 
                      onClick={() => toggleAccordion(globalIndex)}
                      className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      <span className="font-sans text-xl font-bold uppercase tracking-tight">{faq.q}</span>
                      {openIndex === globalIndex ? <Minus className="text-signal-orange shrink-0 ml-4" size={24} /> : <Plus className="text-stark-white shrink-0 ml-4" size={24} />}
                    </button>
                    {openIndex === globalIndex && (
                      <div className="px-6 pb-6 pt-2 font-serif text-lg text-white/80 leading-relaxed border-t border-white/10">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-20 border-t border-white/20 pt-16 text-center">
          <p className="font-sans text-lg mb-6">Still have a question?</p>
          <Link href="mailto:cohort@bloomsday.co" className="inline-block bg-stark-white text-absolute-black font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors hover:bg-white/80">
            EMAIL US 
          </Link>
        </div>
      </div>
    </div>
  );
}
