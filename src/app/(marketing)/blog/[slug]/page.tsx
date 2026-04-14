import Link from "next/link";
import AuthorByline from "@/components/AuthorByline";

// In a real app, this would fetch data based on the slug.
// For now, it's a generic template demonstrating the AuthorByline placement.

export default function ArticleTemplate({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-white min-h-screen pt-32 pb-32 text-[#1A1A2D]">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/blog" className="font-mono text-sm uppercase tracking-widest text-[#999999] hover:text-[#444444] transition-colors inline-block mb-12">
          &larr; Back to The Letter
        </Link>

        {/* Article Header */}
        <div className="font-mono text-[11px] uppercase tracking-widest font-bold mb-4" style={{ color: "var(--category-mindset)" }}>
          [ MINDSET ]
        </div>
        <h1 className="font-sans text-[48px] md:text-[64px] font-bold uppercase tracking-tighter leading-[0.95] mb-8">
          THE MYTH OF PASSIVE INCOME
        </h1>
        
        {/* Author Byline Injection */}
        <AuthorByline />

        {/* Article Body Placeholder */}
        <div className="font-serif text-[18px] md:text-[20px] leading-[1.7] text-[#444444] space-y-8">
          <p>
            &quot;Passive income&quot; is a phrase invented by people who have never built anything real. It is the dream sold to amateurs. For a serious professional, the goal is not to disengage completely from your output—it is to build <em>asymmetric</em> leverage.
          </p>
          <p>
            When you operate a service business, or hold a senior salaried position, your income is entirely symmetric to your time. You work 40 hours; you are compensated for 40 hours. The ceiling is absolute because time is scarce.
          </p>
          <p>
            When you build a digital framework, your input is still required to create the asset. It requires intense, focused work. But once deployed, the distribution of that asset costs nothing. The income becomes asymmetric. 
          </p>
          
          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            The Asymmetric Principle
          </h2>
          <p>
            The internet rewards structured knowledge that solves an immediate problem. It does not reward you for how long it took to acquire that knowledge. It rewards you for how easily someone else can consume it.
          </p>
        </div>
      </div>
    </div>
  );
}
