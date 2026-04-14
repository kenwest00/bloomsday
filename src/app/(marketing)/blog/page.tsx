import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* 1. Hero / Lead Magnet */}
      <section className="bg-off-black text-center pt-40 pb-20 px-6 lg:px-12 flex flex-col items-center border-b border-white/10">
        <div className="font-mono text-sm tracking-widest text-signal-orange uppercase mb-4 font-bold border border-signal-orange px-4 py-1">
          FREE 15-MINUTE FRAMEWORK
        </div>
        <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-stark-white max-w-4xl leading-[1.1]">
          BEFORE YOU BUILD ANYTHING, KNOW WHAT&apos;S WORTH BUILDING.
        </h1>
        <div className="font-serif text-xl italic text-stark-white/80 max-w-3xl mb-12 space-y-6">
          <p>
            Most experienced professionals have more than one monetizable idea. Most of them build the wrong one first.
          </p>
          <p>
            The Expertise Audit is a free 15-minute framework that helps you identify, score, and rank the slices of your domain knowledge by product-market fit, urgency of need, and your own competitive advantage.
          </p>
          <p>
            It is the first exercise we run in every Bloomsday cohort. We&apos;re giving it to you free.
          </p>
        </div>
        
        <form className="flex flex-col md:flex-row w-full max-w-3xl shadow-2xl shadow-signal-orange/10 gap-4 md:gap-0">
          <input 
            type="email" 
            placeholder="YOUR BEST EMAIL" 
            className="bg-absolute-black border border-absolute-black text-stark-white px-6 py-5 flex-grow font-mono uppercase focus:outline-none focus:border-signal-orange text-lg"
          />
          <button type="button" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-8 py-5 hover:bg-orange-600 transition-colors whitespace-nowrap">
            SEND ME THE EXPERTISE AUDIT
          </button>
        </form>
        <p className="font-mono text-xs text-white/40 mt-4 uppercase tracking-widest">
          No spam. One email per week. Unsubscribe anytime.
        </p>
      </section>

      {/* 2. The Bloomsday Letter Archive */}
      <section className="bg-stark-white text-absolute-black min-h-screen">
        <div className="max-w-4xl mx-auto py-32 px-6">
          <div className="mb-16 border-b border-absolute-black pb-4 text-center md:text-left">
            <h2 className="font-sans text-4xl font-bold tracking-tighter uppercase">THE BLOOMSDAY LETTER</h2>
            <p className="font-mono text-sm tracking-widest text-absolute-black/60 mt-2">
              ARCHIVE
            </p>
          </div>
          
          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
            <div className="font-mono uppercase tracking-widest text-sm text-absolute-black/50 pt-2">
              Oct 12
            </div>
            <div>
              <h2 className="font-sans text-3xl font-bold uppercase mb-4 group-hover:text-signal-orange transition-colors">
                [ THE MYTH OF PASSIVE INCOME ]
              </h2>
              <p className="font-serif text-xl text-absolute-black/80 leading-relaxed">
                Why &quot;passive income&quot; is a lie sold to amateurs, and why professionals should focus on &quot;asymmetric leverage&quot; instead.
              </p>
            </div>
          </Link>

          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
            <div className="font-mono uppercase tracking-widest text-sm text-absolute-black/50 pt-2">
              Oct 05
            </div>
            <div>
              <h2 className="font-sans text-3xl font-bold uppercase mb-4 group-hover:text-signal-orange transition-colors">
                [ YOUR SPREADSHEET IS A SOFTWARE COMPANY ]
              </h2>
              <p className="font-serif text-xl text-absolute-black/80 leading-relaxed">
                How to identify the internal tools you already use that the rest of your industry would gladly pay for.
              </p>
            </div>
          </Link>

          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
            <div className="font-mono uppercase tracking-widest text-sm text-absolute-black/50 pt-2">
              Sep 28
            </div>
            <div>
              <h2 className="font-sans text-3xl font-bold uppercase mb-4 group-hover:text-signal-orange transition-colors">
                [ THE NO-CODE STACK FOR 2026 ]
              </h2>
              <p className="font-serif text-xl text-absolute-black/80 leading-relaxed">
                A definitive guide to the modern tools you need to build, sell, and deliver a digital product this weekend.
              </p>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}
