import Link from "next/link";
import Footer from "@/components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <nav className="w-full py-6 px-12 border-b border-off-black/50 bg-absolute-black z-50 fixed top-0 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-stark-white">
          <Link href="/" className="font-sans font-bold text-2xl tracking-widest uppercase">
            [ BLOOMSDAY ]
          </Link>
          <div className="hidden md:flex space-x-8 font-mono text-sm uppercase tracking-widest items-center">
            <Link href="/about" className="hover:text-signal-orange transition-colors duration-300">The Methodology</Link>
            <Link href="/curriculum" className="hover:text-stark-white text-stark-white/70 transition-colors duration-300">The Curriculum</Link>
            <Link href="/blog" className="hover:text-stark-white text-stark-white/70 transition-colors duration-300">The Bloomsday Letter</Link>
            <Link href="/accelerator" className="px-5 py-[10px] bg-[var(--category-launch)] text-stark-white hover:opacity-90 transition-opacity duration-300">
              [ APPLY TO THE ACCELERATOR ]
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 bg-absolute-black">
        {children}
      </main>

      <Footer />
    </div>
  );
}
