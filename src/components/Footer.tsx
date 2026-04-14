import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-absolute-black py-24 px-6 md:px-12 border-t border-off-black">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-sans text-4xl mb-6 uppercase tracking-widest text-stark-white">
          JOIN THE BLOOMSDAY LETTER.
        </h2>
        <p className="font-serif text-xl italic text-stark-white/70 max-w-2xl mb-12">
          Weekly frameworks on productizing expertise, no-code architecture, and the business of leverage. Read by 10,000+ senior professionals in law, healthcare, technology, finance, and beyond. No affiliate links. No fluff. Just frameworks.
        </p>
        <form className="flex flex-col md:flex-row w-full max-w-2xl gap-4">
          <input 
            type="email" 
            placeholder="Your professional email address" 
            className="bg-off-black border border-off-black text-stark-white px-6 py-4 flex-grow font-mono uppercase focus:outline-none focus:border-signal-orange text-sm md:text-base"
          />
          <button type="button" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-8 py-4 hover:bg-orange-600 transition-colors whitespace-nowrap">
            SEND ME THE EXPERTISE AUDIT
          </button>
        </form>
        <p className="font-mono text-[10px] uppercase tracking-widest text-stark-white/30 mt-4">
          No spam. One dispatch per week. Unsubscribe anytime.
        </p>
        
        <div className="mt-24 pt-8 border-t border-off-black w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-stark-white/40 uppercase">
          <p>&copy; 2026 Bloomsday  |  Founded by Ken West</p>
          <div className="space-x-4 md:space-x-6">
            <Link href="/terms" className="hover:text-stark-white transition-colors duration-300">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-stark-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stark-white transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
