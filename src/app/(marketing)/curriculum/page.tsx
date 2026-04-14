import Link from "next/link";

export default function Curriculum() {
  return (
    <>
      <section className="bg-absolute-black text-stark-white pt-40 pb-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            THE BLOOMSDAY CURRICULUM.
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic text-stark-white/80 leading-relaxed">
            A structured path from your first digital product to a scalable, automated business.
          </p>
        </div>
      </section>

      <section className="bg-stark-white text-absolute-black min-h-screen">
        {/* Tier 1 */}
        <div className="border-b border-off-black/20 text-center py-32 px-6 lg:px-12 hover:bg-off-black/5 transition-colors duration-500">
          <span className="font-mono text-signal-orange uppercase tracking-widest block mb-4">[ TIER 1 - $79 ]</span>
          <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">THE DIGITAL PRODUCT BLUEPRINT.</h2>
          <p className="font-serif text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            A weekend-long curriculum designed to help you identify the exact piece of your domain knowledge that can be turned into a profitable digital product.
          </p>
          <Link href="/blueprint" className="inline-block bg-signal-orange text-stark-white font-bold uppercase px-10 py-5 transition-transform hover:scale-105">
            VIEW DETAILS
          </Link>
        </div>

        {/* Tier 2 */}
        <div className="border-b border-off-black/20 text-center py-32 px-6 lg:px-12 hover:bg-off-black/5 transition-colors duration-500">
          <span className="font-mono text-signal-orange uppercase tracking-widest block mb-4">[ TIER 2 - $797 ]</span>
          <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">THE NO-CODE PRODUCT BUILDER.</h2>
          <p className="font-serif text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            The comprehensive, self-paced masterclass on the modern no-code stack. Turn your blueprint into a revenue-generating asset, complete with automated checkout and delivery.
          </p>
          <Link href="/builder" className="inline-block bg-signal-orange text-stark-white font-bold uppercase px-10 py-5 transition-transform hover:scale-105">
            VIEW DETAILS
          </Link>
        </div>

        {/* Tier 3 */}
        <div className="text-center py-32 px-6 lg:px-12 hover:bg-off-black/5 transition-colors duration-500">
          <span className="font-mono text-signal-orange uppercase tracking-widest block mb-4">[ TIER 3 - $3,000 ]</span>
          <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">THE BLOOMSDAY ACCELERATOR.</h2>
          <p className="font-serif text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            A live, 6-week cohort for high-performing professionals. Build, launch, and scale your product with direct guidance, peer feedback, and advanced growth strategies.
          </p>
          <Link href="/accelerator" className="inline-block border-2 border-absolute-black font-bold uppercase px-10 py-5 hover:bg-absolute-black hover:text-stark-white transition-all">
            APPLY FOR THE NEXT COHORT
          </Link>
        </div>
      </section>
    </>
  );
}
