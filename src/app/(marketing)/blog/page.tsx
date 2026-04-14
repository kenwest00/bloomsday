"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["ALL", "MINDSET", "PRICING", "NO-CODE", "LAUNCH", "ARCHITECTURE"];

const categoryColors: Record<string, string> = {
  "MINDSET": "var(--category-mindset)",
  "PRICING": "var(--category-pricing)",
  "NO-CODE": "var(--category-no-code)",
  "LAUNCH": "var(--category-launch)",
  "ARCHITECTURE": "var(--category-architecture)"
};

const articles = [
  {
    id: "03",
    num: "03",
    title: "THE MYTH OF PASSIVE INCOME",
    category: "MINDSET",
    date: "April 7, 2026",
    readTime: "3 min read",
    preview: "\"Passive income\" is a phrase invented by people who have never built anything real. For serious professionals, the goal isn't passive — it's asymmetric. Here's the distinction that changes everything about how you build.",
    link: "/blog/dispatch-03"
  },
  {
    id: "02",
    num: "02",
    title: "YOUR SPREADSHEET IS A COMPANY",
    category: "ARCHITECTURE",
    date: "March 31, 2026",
    readTime: "5 min read",
    preview: "The internal tools you built to survive your job are probably worth more than your job. How to identify the operational logic you have already documented, and why the rest of your industry would pay for it.",
    link: "/blog/dispatch-02"
  },
  {
    id: "01",
    num: "01",
    title: "THE NO-CODE STACK FOR 2026",
    category: "NO-CODE",
    date: "March 24, 2026",
    readTime: "7 min read",
    preview: "A field guide to the eight tools that senior professionals actually need to build, sell, and deliver a digital product — and the order you should learn them. No fluff, no affiliate links. Just the stack.",
    link: "/blog/dispatch-01"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredArticles = articles.filter(
    (article) => activeCategory === "ALL" || article.category === activeCategory
  );

  return (
    <div className="bg-absolute-black min-h-screen pt-32 pb-24 font-sans text-stark-white">
       
       <div className="max-w-[1200px] mx-auto px-6 md:px-12">
         {/* Page Header */}
         <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
           <div>
             <h1 className="font-sans text-5xl font-bold uppercase tracking-tighter mb-2">The Bloomsday Letter</h1>
             <p className="font-serif italic text-white/50 text-lg">Productizing expertise for the senior professional.</p>
           </div>
         </div>

         {/* Filter Bar */}
         <div className="mb-12 overflow-x-auto no-scrollbar">
           <div className="flex gap-3 min-w-max">
             {categories.map((cat) => {
               const isActive = activeCategory === cat;
               const accentColor = categoryColors[cat];

               return (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className="uppercase tracking-widest text-[12px] px-[14px] py-[6px] rounded-[2px] transition-colors duration-200"
                   style={{
                     backgroundColor: isActive ? (cat === "ALL" ? "#1A1A2D" : accentColor) : "transparent",
                     border: `1px solid ${isActive ? (cat === "ALL" ? "#1A1A2D" : accentColor) : "#CCCCCC"}`,
                     color: isActive ? "#FFFFFF" : "#666666"
                   }}
                 >
                   [ {cat} ]
                 </button>
               );
             })}
           </div>
         </div>

         {/* Grid Layout */}
         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
           <AnimatePresence mode="popLayout">
             {filteredArticles.map((article) => {
               const accentColor = categoryColors[article.category];
               return (
                 <motion.div
                   key={article.id}
                   layout
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.2, ease: "easeInOut" }}
                   className="h-full"
                 >
                   <Link href={article.link} className="group block relative h-full bg-white rounded-t-[2px] rounded-b-[2px] overflow-hidden hover-shadow flex flex-col transition-colors duration-200"
                         style={{ border: "none" }}>
                     
                     {/* Color Header Block */}
                     <div 
                       className="relative w-full h-[72px] md:h-[88px] flex items-center justify-between px-[20px] transition-all duration-200 ease-in-out group-hover:brightness-[1.12] shrink-0 rounded-t-[2px] overflow-hidden"
                       style={{ backgroundColor: accentColor }}
                     >
                       {/* Category Tag inside Header */}
                       <div 
                         className="font-mono text-[11px] uppercase text-white z-10"
                         style={{ letterSpacing: "0.08em", fontWeight: 600 }}
                       >
                         [ {article.category} ]
                       </div>

                       {/* Dispatch Number inside Header */}
                       <div 
                         className="font-sans text-[44px] md:text-[56px] font-[800] text-white opacity-30 leading-none z-10 select-none pb-1"
                       >
                         {article.num}
                       </div>
                     </div>

                     {/* Card Content Area - reduced top padding, removed extra left padding */}
                     <div className="pt-[20px] pr-[28px] pb-[24px] pl-[28px] flex flex-col justify-between h-full group-hover:bg-[#FAFAF8] transition-colors duration-200 flex-grow">
                       <div>
                         {/* Title */}
                         <h2 className="font-sans text-[22px] md:text-[24px] font-bold uppercase tracking-tight mb-4" style={{ color: "#1A1A2D" }}>
                           {article.title}
                         </h2>

                         {/* Preview Copy */}
                         <p className="font-serif text-[14px] md:text-[15px] leading-[1.6] mb-8" style={{ color: "var(--text-preview)" }}>
                           {article.preview}
                         </p>
                       </div>

                       {/* Meta Row & Arrow */}
                       <div className="flex justify-between items-center mt-auto border-t border-black/5 pt-4">
                         <div className="font-mono text-[12px] uppercase tracking-widest" style={{ color: "var(--text-meta)" }}>
                           {article.date} &nbsp;&middot;&nbsp; {article.readTime}
                         </div>
                         <div 
                           className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 ease-in-out font-bold"
                           style={{ color: accentColor }}
                         >
                           &rarr;
                         </div>
                       </div>
                     </div>

                   </Link>
                 </motion.div>
               );
             })}
           </AnimatePresence>
         </motion.div>

       </div>

       {/* Footer CTA */}
       <section className="bg-stark-white text-absolute-black py-20 px-6 max-w-[1200px] mx-auto mt-32 rounded-[2px] border border-white/20 text-center">
         <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
           JOIN THE BLOOMSDAY LETTER.
         </h2>
         <p className="font-serif text-lg text-absolute-black/70 max-w-2xl mx-auto mb-8">
           Weekly frameworks on productizing expertise, no-code architecture, and the business of leverage. Read by 10,000+ senior professionals.
         </p>
         
         <form className="max-w-xl mx-auto flex flex-col gap-4">
           <input 
             type="email" 
             placeholder="YOUR BEST EMAIL" 
             className="bg-off-black/5 border border-absolute-black/20 focus:outline-none focus:border-signal-orange text-absolute-black px-6 py-4 font-mono text-sm uppercase tracking-widest"
           />
           <button type="button" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-8 py-5 hover:bg-orange-600 transition-colors">
             SEND ME THE EXPERTISE AUDIT
           </button>
           <p className="font-mono text-xs uppercase tracking-widest text-absolute-black/40 mt-2">
             No spam. One dispatch per week. Unsubscribe anytime.
           </p>
         </form>
       </section>

    </div>
  )
}
