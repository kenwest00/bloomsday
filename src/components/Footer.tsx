import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-absolute-black py-24 px-12 border-t border-off-black">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-sans text-4xl mb-6 uppercase tracking-widest text-stark-white">JOIN THE PRIVATE LIST</h2>
        <p className="font-serif text-xl italic text-stark-white/70 max-w-2xl mb-12">
          Weekly essays on productizing expertise, no-code architecture, and the business of leverage. Read by 10,000+ senior professionals.
        </p>
        <form className="flex w-full max-w-md">
          <input 
            type="email" 
            placeholder="YOUR EMAIL" 
            className="bg-off-black border border-off-black text-stark-white px-6 py-4 flex-grow font-mono uppercase focus:outline-none focus:border-signal-orange"
          />
          <button type="button" className="bg-signal-orange text-stark-white font-sans font-bold uppercase tracking-widest px-8 py-4 hover:bg-orange-600 transition-colors">
            SUBSCRIBE
          </button>
        </form>
        
        <div className="mt-24 pt-8 border-t border-off-black w-full flex justify-between font-mono text-xs text-stark-white/40 uppercase">
          <p>&copy; {new Date().getFullYear()} Bloomsday</p>
          <div className="space-x-6">
            <Link href="/terms" className="hover:text-stark-white transition-colors duration-300">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-stark-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stark-white transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
