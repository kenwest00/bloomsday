import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BuilderPage() {
  return (
    <>
      <section className="bg-absolute-black min-h-screen flex items-center justify-center text-center px-6 border-b border-off-black">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="font-sans text-[clamp(3rem,8vw,9rem)] leading-[0.9] font-bold tracking-tighter uppercase mb-10 text-stark-white">
            BUILD THE ASSET.<br/>
            <span className="text-signal-orange">AUTOMATE THE REVENUE.</span>
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic text-stark-white/80 max-w-4xl mx-auto leading-relaxed mb-16">
            The comprehensive, self-paced masterclass on the modern no-code stack. Turn your domain expertise into a revenue-generating digital product, complete with automated checkout and delivery.
          </p>
          <button className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-16 py-6 text-2xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
            ENROLL NOW ($797)
          </button>
        </div>
      </section>

      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
            THE EXECUTION GAP.
          </h2>
          <div className="font-serif text-2xl md:text-3xl leading-relaxed text-absolute-black/80">
            <p className="mb-6">
              You know what you want to build. You have the domain expertise. But the moment you sit down to execute, you are paralyzed by technical decisions.
            </p>
            <p className="mb-6">
              Which platform? How do I connect the payment gateway? How do I automate the delivery?
            </p>
            <p className="font-bold text-signal-orange uppercase">
              The execution gap is where great ideas die.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-absolute-black py-32 text-center text-stark-white">
        <div className="max-w-4xl mx-auto mb-20">
           <h2 className="font-sans text-5xl font-bold uppercase tracking-widest mb-8">THE CURRICULUM</h2>
           <p className="font-serif text-2xl italic text-stark-white/80">
             This is not a theoretical course. This is an over-the-shoulder, step-by-step implementation guide.
           </p>
        </div>
        
        <button className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-16 py-6 text-2xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
          ENROLL NOW ($797)
        </button>
      </section>
    </>
  );
}
