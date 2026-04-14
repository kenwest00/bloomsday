import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* 1. Hero / Capture */}
      <section className="bg-off-black text-center pt-40 pb-20 px-6 lg:px-12 flex flex-col items-center border-b border-white/10">
        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-stark-white">
          THE PRIVATE LIST.
        </h1>
        <p className="font-serif text-xl italic text-stark-white/70 max-w-2xl mb-12">
          Weekly essays on productizing expertise, no-code architecture, and the business of leverage. Read by 10,000+ senior professionals.
        </p>
        
        <form className="flex w-full max-w-xl shadow-2xl shadow-signal-orange/10">
          <input 
            type="email" 
            placeholder="YOUR EMAIL" 
            className="bg-absolute-black border border-absolute-black text-stark-white px-6 py-5 flex-grow font-mono uppercase focus:outline-none focus:border-signal-orange text-lg"
          />
          <button type="button" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-10 py-5 hover:bg-orange-600 transition-colors">
            SUBSCRIBE
          </button>
        </form>
      </section>

      {/* 2. Archive */}
      <section className="bg-stark-white text-absolute-black min-h-screen">
        <div className="max-w-4xl mx-auto py-32 px-6">
          
          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
            <div className="font-mono uppercase tracking-widest text-sm text-absolute-black/50 pt-2">
              Oct 12
            </div>
            <div>
              <h2 className="font-sans text-3xl font-bold uppercase mb-4 group-hover:text-signal-orange transition-colors">
                [ THE MYTH OF PASSIVE INCOME ]
              </h2>
              <p className="font-serif text-xl text-absolute-black/80 leading-relaxed">
                Why "passive income" is a lie sold to amateurs, and why professionals should focus on "asymmetric leverage" instead.
              </p>
            </div>
          </Link>

          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
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

          <Link href="#" className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 py-10 border-b border-absolute-black/20 group hover:opacity-70 transition-opacity">
            <div className="font-mono uppercase tracking-widest text-sm text-absolute-black/50 pt-2">
              Sep 28
            </div>
            <div>
              <h2 className="font-sans text-3xl font-bold uppercase mb-4 group-hover:text-signal-orange transition-colors">
                [ THE NO-CODE STACK FOR 2024 ]
              </h2>
              <p className="font-serif text-xl text-absolute-black/80 leading-relaxed">
                A definitive guide to the only three tools you need to build, sell, and deliver a digital product this weekend.
              </p>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}
