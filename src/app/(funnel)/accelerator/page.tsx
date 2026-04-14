import Link from "next/link";

export default function AcceleratorPage() {
  return (
    <>
      <section className="bg-absolute-black min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="font-sans text-[clamp(2.5rem,7vw,8rem)] leading-[0.9] font-bold tracking-tighter uppercase mb-10 text-stark-white">
            THE BLOOMSDAY<br/>
            <span className="text-absolute-black text-stroke-white text-stroke-2 outline-text">ACCELERATOR</span>
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic text-stark-white/80 max-w-4xl mx-auto leading-relaxed mb-16">
            A live, 6-week cohort for high-performing professionals. Build, launch, and scale your product with direct guidance, peer feedback, and advanced growth strategies.
          </p>
          <a href="#apply" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-16 py-6 text-2xl hover:bg-orange-600 transition-colors shadow-2xl shadow-signal-orange/20">
            APPLY FOR THE NEXT COHORT
          </a>
        </div>
      </section>

      <section className="bg-stark-white text-absolute-black py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-sans text-5xl font-bold tracking-tighter uppercase mb-6">ACCELERATED EXECUTION.</h2>
            <p className="font-serif text-2xl leading-relaxed">
              The Accelerator is designed for professionals who value speed above all else. You will not be learning in isolation. You will be building alongside a curated group of peers, with direct feedback on your product architecture, pricing strategy, and launch sequence.
            </p>
          </div>
          <div className="bg-off-black p-12 text-stark-white">
            <h2 className="font-sans text-3xl font-bold tracking-tighter uppercase mb-6 text-signal-orange">THE SELECTION CRITERIA.</h2>
            <p className="font-serif text-xl leading-relaxed mb-8">
              We strictly limit each cohort to 20 professionals to ensure high-quality interaction.
            </p>
            <ul className="font-mono text-sm tracking-widest uppercase space-y-4">
              <li className="border-b border-white/20 pb-2">[ ] Demonstrated domain expertise</li>
              <li className="border-b border-white/20 pb-2">[ ] Commitment to execution</li>
              <li className="pb-2">[ ] Potential to contribute to the group</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-absolute-black py-40 px-6 lg:px-12 border-t border-white/10 text-center">
         <h2 className="font-sans text-5xl font-bold tracking-tighter uppercase mb-12 text-stark-white">APPLICATION FORM</h2>
         <div className="max-w-3xl mx-auto bg-off-black p-16 border border-white/10">
           {/* Mock Application Embed */}
           <p className="font-mono text-stark-white/50 tracking-widest uppercase mb-12">
             [ TYPEFORM EMBED PLACEMENT ]
           </p>
           <button className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-12 py-5 hover:bg-orange-600 transition-colors">
             SUBMIT APPLICATION
           </button>
         </div>
      </section>
    </>
  );
}
