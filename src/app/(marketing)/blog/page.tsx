"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="bg-absolute-black min-h-screen text-stark-white pt-24 font-sans">
       {/* 1. HERO - EDITORIAL LAYOUT */}
       <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-20 lg:py-32 flex flex-col xl:flex-row gap-12 xl:gap-24 border-b border-white/20">
         
         {/* Left Column - Large Typography & Capture */}
         <div className="flex-1 flex flex-col justify-between max-w-3xl">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-16 xl:mb-0"
           >
             <div className="font-mono text-sm tracking-widest text-signal-orange uppercase font-bold mb-8">
               [ THE BLOOMSDAY LETTER ]
             </div>
             <h1 className="font-sans text-[clamp(4.5rem,9vw,9rem)] leading-[0.85] font-bold uppercase tracking-tighter mb-10 text-stark-white">
               BEFORE<br/> YOU BUILD<br/> ANYTHING.
             </h1>
             <p className="font-serif text-xl md:text-2xl italic text-stark-white/80 max-w-xl leading-relaxed">
               Most experienced professionals have more than one monetizable idea. Most of them build the wrong one first. Establish what is worth building.
             </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="bg-signal-orange p-8 md:p-12 text-absolute-black relative overflow-hidden group w-full"
           >
             <div className="absolute -right-10 -bottom-10 font-sans text-9xl font-bold opacity-10 leading-none">?</div>
             <div className="font-mono text-xs md:text-sm tracking-widest font-bold uppercase mb-6 relative z-10">THE EXPERTISE AUDIT (FREE)</div>
             <p className="font-serif text-lg mb-8 max-w-md relative z-10">
               Get the 15-minute framework for identifying, scoring, and ranking your domain knowledge by product-market fit.
             </p>
             <form className="flex flex-col md:flex-row gap-6 relative z-10 items-end">
               <input 
                 type="email" 
                 placeholder="YOUR BEST EMAIL" 
                 className="bg-transparent border-b-[3px] border-absolute-black focus:outline-none placeholder-absolute-black/60 text-xl font-sans font-bold uppercase py-2 w-full md:w-auto flex-grow"
               />
               <button type="button" className="text-left font-sans text-2xl font-bold uppercase tracking-tight hover:scale-105 transition-transform shrink-0 pb-2">
                 SEND IT &rarr;
               </button>
             </form>
           </motion.div>
         </div>

         {/* Right Column - Editorial Graphic */}
         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex-1 flex flex-col gap-6 xl:max-w-md mt-12 xl:mt-0"
         >
           {/* Graphic Block 1 */}
           <div className="aspect-[4/5] bg-stark-white text-absolute-black p-8 md:p-12 flex flex-col justify-between items-end relative overflow-hidden">
             {/* Huge Number Graphic */}
             <div className="absolute top-0 right-0 -mr-6 -mt-8 font-sans text-[18rem] md:text-[22rem] leading-none font-bold tracking-tighter text-absolute-black/5">
               01
             </div>
             
             <div className="font-mono text-xs uppercase tracking-widest self-start border-b border-absolute-black pb-2 relative z-10">
               THE FIRST EXERCISE
             </div>
             <div className="font-sans text-right text-3xl md:text-4xl font-bold uppercase leading-[0.9] tracking-tighter relative z-10 max-w-[250px]">
               YOUR DOMAIN LEVERAGE IDENTIFIER.
             </div>
           </div>
           
           {/* Graphic Block 2 (Abstract Shapes mirroring reference) */}
           <div className="grid grid-cols-2 gap-6 h-48 md:h-64">
              <div className="bg-signal-orange h-full w-full"></div>
              <div className="border-[3px] border-white/20 h-full w-full p-6 flex flex-col justify-between">
                <div className="w-4 h-4 bg-stark-white rounded-full"></div>
                <div className="font-mono text-xs text-white/50 uppercase tracking-widest text-right">
                  [ READ WEEKLY ]
                </div>
              </div>
           </div>
         </motion.div>
       </section>

       {/* 2. ARCHIVE - EDITORIAL GRID */}
       <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-32">
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="font-mono text-xs tracking-widest uppercase mb-20 border-b border-white/20 pb-4 flex justify-between text-white/60"
         >
           <span>LATEST DISPATCHES</span>
           <span>ARCHIVE VOL. 1</span>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
            
            {/* Article 1 */}
            <Link href="#" className="group flex flex-col">
              <div className="aspect-square bg-off-black relative overflow-hidden mb-8 flex items-center justify-center p-12 transition-colors duration-500 hover:bg-white/5 border-t border-white/20">
                 {/* Massive number style */}
                 <div className="absolute top-4 left-6 font-sans text-[8rem] leading-none font-bold tracking-tighter text-white/10 group-hover:text-signal-orange transition-colors duration-500">
                   03
                 </div>
                 {/* Broken Multiline Header */}
                 <div className="relative z-10 font-sans text-5xl md:text-6xl font-bold uppercase leading-[0.85] tracking-tighter self-end text-right ml-12">
                   THE<br/>MYTH<br/>OF PASSIVE<br/>INCOME
                 </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <div className="font-mono text-xs text-signal-orange tracking-widest uppercase font-bold">OCT 12, 2026</div>
                <div className="font-serif italic text-white/40 text-sm">3 min read</div>
              </div>
              <p className="font-serif text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300">
                Why &quot;passive income&quot; is a lie sold to amateurs, and why professionals should focus on asymmetric leverage instead.
              </p>
            </Link>

            {/* Article 2 */}
            <Link href="#" className="group flex flex-col">
              {/* Inverted Color Block to match magazine contrast */}
              <div className="aspect-square bg-stark-white text-absolute-black relative overflow-hidden mb-8 flex items-center justify-center p-12 transition-colors duration-500 hover:bg-white/90">
                 {/* Massive number style */}
                 <div className="absolute top-4 left-6 font-sans text-[8rem] leading-none font-bold tracking-tighter text-black/10 group-hover:text-signal-orange transition-colors duration-500">
                   02
                 </div>
                 {/* Broken Multiline Header */}
                 <div className="relative z-10 font-sans text-5xl md:text-6xl font-bold uppercase leading-[0.85] tracking-tighter self-end text-right ml-6">
                   YOUR<br/>SPREAD<br/>SHEET IS A<br/>COMPANY
                 </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <div className="font-mono text-xs text-signal-orange tracking-widest uppercase font-bold">OCT 05, 2026</div>
                <div className="font-serif italic text-white/40 text-sm">5 min read</div>
              </div>
              <p className="font-serif text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300">
                How to identify the internal tools you already use that the rest of your industry would gladly pay for.
              </p>
            </Link>

            {/* Article 3 */}
            <Link href="#" className="group flex flex-col">
              <div className="aspect-square bg-off-black relative overflow-hidden mb-8 flex items-center justify-center p-12 transition-colors duration-500 hover:bg-white/5 border-t border-white/20 border-l border-white/10 md:border-l-0 lg:border-l border-r border-b border-t-0 border-r-0 lg:border-t">
                 {/* Massive number style */}
                 <div className="absolute top-4 left-6 font-sans text-[8rem] leading-none font-bold tracking-tighter text-white/10 group-hover:text-signal-orange transition-colors duration-500">
                   01
                 </div>
                 {/* Broken Multiline Header */}
                 <div className="relative z-10 font-sans text-5xl md:text-6xl font-bold uppercase leading-[0.85] tracking-tighter self-end text-right ml-12">
                   THE<br/>NO-CODE<br/>STACK<br/>FOR 2026
                 </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <div className="font-mono text-xs text-signal-orange tracking-widest uppercase font-bold">SEP 28, 2026</div>
                <div className="font-serif italic text-white/40 text-sm">7 min read</div>
              </div>
              <p className="font-serif text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300">
                A definitive guide to the modern tools you need to build, sell, and deliver a digital product this weekend.
              </p>
            </Link>

         </div>
       </section>

       {/* Footer Subscribe Banner */}
       <section className="bg-signal-orange text-absolute-black py-20 px-6 lg:px-12 mt-32 text-center md:text-left">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter max-w-xl leading-[0.9]">
             JOIN 10,000+ PROFESSIONALS.
           </h2>
           <form className="flex w-full md:w-auto relative border-b-[3px] border-absolute-black pb-2">
             <input 
               type="email" 
               placeholder="YOUR EMAIL" 
               className="bg-transparent focus:outline-none placeholder-absolute-black/60 text-xl font-sans font-bold uppercase w-full md:w-80"
             />
             <button type="button" className="font-sans text-2xl font-bold uppercase tracking-tight shrink-0 hover:scale-105 transition-transform ml-4">
               &rarr;
             </button>
           </form>
         </div>
       </section>
    </div>
  )
}
