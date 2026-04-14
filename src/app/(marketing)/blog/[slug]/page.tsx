import Link from "next/link";
import AuthorByline from "@/components/AuthorByline";

// In a real app, this would fetch from a CMS (Sanity, Contentful, etc.)
// For now, we are hardcoding the article content based on the slug.

const getArticleContent = (slug: string) => {
  if (slug === "dispatch-01") {
    return {
      category: "NO-CODE",
      title: "THE NO-CODE STACK FOR 2026",
      paragraphs: (
        <>
          <p>
            Let me tell you what this article is not.
          </p>
          <p>
            It is not a roundup of every no-code tool that launched in the last eighteen months. It is not a sponsored list. It is not written for someone who wants to build a consumer course business with passive income.
          </p>
          <p>
            It is written for the professional with twelve years in healthcare compliance, or twenty years in logistics operations, or fifteen years advising mid-market CFOs — who has decided that the knowledge they have spent a career building is worth more than their next billable hour. And who wants to know, specifically, which tools they need.
          </p>
          <p>
            The honest answer is: it depends on what you&apos;re building. And getting that answer wrong costs you weeks.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            The spectrum problem
          </h2>
          <p>
            Most articles about the no-code stack are written with one type of product in mind — usually a self-paced video course sold to individuals for under $500. That is a legitimate product. It is also one of the least likely products for a senior professional with deep domain expertise to build.
          </p>
          <p>
            The professionals Bloomsday works with build things like:
          </p>
          <ul className="list-disc pl-6 space-y-4 my-8 md:ml-4">
            <li>A diagnostic tool that assesses a company&apos;s regulatory exposure and generates a prioritized remediation report</li>
            <li>A client portal that gives mid-market operators real-time visibility into supply chain risk metrics</li>
            <li>A subscription platform that delivers weekly compliance intelligence to healthcare administrators</li>
            <li>An automated workflow system that productizes an internal process they spent a decade refining</li>
            <li>A SaaS-style tool that gives commercial real estate teams a proprietary underwriting framework on demand</li>
          </ul>
          <p>
            These are not the same product as a video course. They require a different stack. They sell to different buyers, at different price points, through different channels. And they are entirely buildable without writing a single line of code — if you know which tools to use.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            The one thing that doesn&apos;t change
          </h2>
          <p>
            Before we get to what differs, here is what every digital product stack has in common regardless of what you are building:
          </p>
          <p className="font-bold my-6 font-mono text-[#1A1A2D] uppercase tracking-wider text-sm bg-black/5 p-4 inline-block">
            A data layer. An automation layer. A billing layer. A delivery layer.
          </p>
          <p>
            Every product you could build — from a $49 downloadable guide to a $2,400/year enterprise diagnostic platform — requires these four things. What changes is which specific tool handles each job.
          </p>
          <p>
            Think of these as the four walls of any building. The materials change based on what the building is for. The walls do not.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            The universal tools — these appear in almost every stack
          </h2>
          <p>
            <strong>Airtable</strong> is the data backbone of the no-code world. It is a spreadsheet that thinks it is a database — and for most of the products a senior professional would build, it is sufficient. Customer records, diagnostic inputs, compliance data, subscription rosters, report histories — all of it lives in Airtable in a format that is readable, queryable, and connectable to every other tool in your stack.
            <br/><br/>
            If you learn only one tool before you know what you are building, learn Airtable.
          </p>
          <p>
            <strong>Zapier</strong> (or Make, for more complex workflows) is the connective tissue. It watches for something to happen in one tool and triggers something else in another — automatically. A client submits a diagnostic form? Zapier processes the inputs, generates the output, and delivers the report. A new subscription is processed? Zapier creates the client record, sends the welcome sequence, and provisions access. Zapier does not build anything itself. It makes everything you have built talk to each other.
          </p>
          <p>
            <strong>Stripe</strong> is the billing layer for anything that goes beyond a simple one-time transaction. Course sold once for $297 — Gumroad or Lemon Squeezy is fine. Subscription platform at $299/month per seat, with tiered pricing and enterprise invoicing — you need Stripe. The distinction matters earlier than most people expect.
          </p>
          <p>
            <strong>Webflow</strong> handles your marketing and product pages — the pages that convert a curious visitor into a paying customer or a qualified lead into a booked discovery call. Regardless of what the product does on the back end, the front-facing page that explains it needs to be professional, fast, and conversion-optimized.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            The variable layer — this is where your stack diverges
          </h2>
          <p>
            This is where it gets specific. Match your product type to the tools below.
          </p>
          <div className="space-y-6 my-8">
            <p>
              <strong>If you are building a diagnostic or assessment tool</strong> — a product that takes inputs from the buyer, processes them against your expertise, and delivers a scored output or customized report:<br />
              <span className="text-[#666666] leading-relaxed block mt-2">
                Your intake layer is Typeform or Tally. Your processing and scoring layer is Airtable with formula fields or a connected Make workflow. Your delivery layer is Softr — a tool that builds client-facing portals and dashboards directly on top of Airtable data. The buyer submits their assessment, Airtable scores it, and Softr displays a personalized results dashboard. No code. The whole thing can be wired in two to three weeks.
              </span>
            </p>
            <p>
              <strong>If you are building an internal workflow tool productized for external sale</strong> — a process you have refined over years that other organizations in your industry would pay to run themselves:<br />
              <span className="text-[#666666] leading-relaxed block mt-2">
                Your foundation is Airtable as the workflow engine. Softr or Glide turns it into a web or mobile application your clients can actually use. Zapier or Make handles the automation logic. MemberStack gates access by subscription tier. The result is an application that looks and functions like software — because it is software, assembled from components rather than written from scratch.
              </span>
            </p>
            <p>
              <strong>If you are building a SaaS-style subscription platform with real application logic</strong> — user roles, conditional workflows, dynamic data relationships, custom interfaces:<br />
              <span className="text-[#666666] leading-relaxed block mt-2">
                This is where Bubble becomes the right tool. Bubble is the most powerful no-code platform available. It handles complex relational data, conditional logic, multi-user applications, and API integrations — without code. The learning curve is steeper than the other tools on this list, which is why the Bloomsday methodology sequences it after you have clarity on exactly what you are building. Bubble paired with Stripe for subscription billing and Airtable for external data is the stack that has launched platforms that raised institutional funding, signed enterprise contracts, and scaled to thousands of users — all before a developer was ever hired.
              </span>
            </p>
            <p>
              <strong>If you are building a client portal with proprietary data or intelligence</strong> — a private environment where your clients log in to access curated insights, reports, or operational dashboards built from your expertise:<br />
              <span className="text-[#666666] leading-relaxed block mt-2">
                Softr is purpose-built for this. It layers a polished, role-based portal interface on top of Airtable data. Your clients see exactly what you want them to see, filtered by their account, updated in real time as your underlying data changes. Add Loom for async video commentary and Zapier for automated alerts and you have a client intelligence platform that would cost six figures to build with a development team.
              </span>
            </p>
            <p>
              <strong>If you are building an automated reporting or compliance tool</strong> — a system that ingests data from your clients, applies your analytical framework, and produces structured outputs on a scheduled or triggered basis:<br />
              <span className="text-[#666666] leading-relaxed block mt-2">
                Your intake is Typeform or a connected form. Your processing engine is Make (more powerful than Zapier for multi-step conditional workflows). Your output is a formatted report delivered via email or displayed in a Softr portal. Your billing is Stripe. This is the stack that a compliance director uses to turn a manual audit process into a product that runs itself.
              </span>
            </p>
          </div>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            Two stacks, side by side
          </h2>
          <p>
            For clarity: here is what a consumer product stack looks like versus an enterprise product stack.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#FAFAF8] p-6 border border-[#E8E8E8]">
              <p className="font-mono text-xs uppercase tracking-widest text-[#1A1A2D] font-bold mb-4 border-b border-[#E8E8E8] pb-4">
                Consumer Stack
                <span className="block text-[#666] font-serif capitalize font-normal tracking-normal mt-1 text-[14px]">Self-paced course or guide</span>
              </p>
              <div className="space-y-2 text-[#444] text-[15px] font-medium">
                <p>1. Notion <span className="text-[#999]">(content)</span></p>
                <p>2. Gumroad <span className="text-[#999]">(payment)</span></p>
                <p>3. Webflow <span className="text-[#999]">(site)</span></p>
                <p>4. ConvertKit <span className="text-[#999]">(email)</span></p>
                <p>5. Zapier <span className="text-[#999]">(automation)</span></p>
              </div>
            </div>
            
            <div className="bg-[#FAFAF8] p-6 border border-[#E8E8E8]">
              <p className="font-mono text-xs uppercase tracking-widest text-[#1A1A2D] font-bold mb-4 border-b border-[#E8E8E8] pb-4">
                Enterprise Stack
                <span className="block text-[#666] font-serif capitalize font-normal tracking-normal mt-1 text-[14px]">Diagnostic platform or portal</span>
              </p>
              <div className="space-y-2 text-[#444] text-[15px] font-medium">
                <p>1. Typeform <span className="text-[#999]">(intake)</span></p>
                <p>2. Airtable <span className="text-[#999]">(data & logic)</span></p>
                <p>3. Softr <span className="text-[#999]">(interface)</span></p>
                <p>4. Stripe <span className="text-[#999]">(billing)</span></p>
                <p>5. Make <span className="text-[#999]">(automation)</span></p>
                <p>6. Webflow <span className="text-[#999]">(site)</span></p>
              </div>
            </div>
          </div>
          
          <p>
            Both stacks are entirely buildable without code. Both can be live and generating revenue within 90 days. The tools are different. The principles are identical.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            Where to start regardless of what you are building
          </h2>
          <p>
            Before you touch any tool: structure your product in plain language. What does your buyer input? What do they receive? What is the transformation from entry to exit?
          </p>
          <p>
            Write that down in a Notion document or on paper before you open a single platform. The professionals who get lost in the no-code stack are almost always the ones who tried to figure out what they were building while learning how to build it. Those are two separate cognitive tasks. Do them separately.
          </p>
          <p>
            Once you have the structure: choose one tool from your stack and build a working prototype of the core function. Not the full product. The core function. A diagnostic that scores one input. A portal that displays one data field. A workflow that automates one step.
          </p>
          <p>
            The rest of the stack follows from there. Every additional tool you add is an extension of something that already works — not a prerequisite for starting.
          </p>

          <h2 className="font-sans text-[28px] font-bold uppercase tracking-tight text-[#1A1A2D] mt-16 mb-6">
            What this list does not include — and why
          </h2>
          <p>
            There are excellent tools not on this list: Retool for internal tooling, Betty Blocks for enterprise-grade no-code, FlutterFlow for mobile applications, Outseta for subscription management. They are not here because they are either more technically demanding than the entry point this article is designed for, or because they are better suited to a second or third product than a first.
          </p>
          <p>
            The stack above is sufficient to build and launch every product type described in this article. Start there. Optimize when you have a paying customer base that justifies it.
          </p>

          <div className="bg-[#1A1A2D] text-white p-8 md:p-12 mt-16 mb-8 text-center rounded-[2px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#4A6FA5] opacity-0 transition-opacity duration-300 group-hover:opacity-10 z-0"></div>
            <div className="relative z-10">
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-4">The No-Code Product Builder</h3>
              <p className="font-serif text-[16px] md:text-[18px] text-white/80 mb-8 font-normal max-w-2xl mx-auto leading-relaxed">
                The No-Code Product Builder walks you through building your specific stack from scratch — in the order that matches what you are building, at the pace that matches your technical comfort level.
              </p>
              <Link href="/builder" className="inline-block bg-[#4A6FA5] text-white px-8 py-4 font-mono text-sm uppercase font-bold tracking-widest hover:bg-[#3B5B8A] transition-colors shadow-2xl">
                ENROLL IN THE BUILDER &rarr;
              </Link>
            </div>
          </div>
        </>
      )
    };
  }

  // Fallback / dispatch-03 content
  return {
    category: "MINDSET",
    title: "THE MYTH OF PASSIVE INCOME",
    paragraphs: (
      <>
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
      </>
    )
  };
};

export default function ArticleTemplate({ params }: { params: { slug: string } }) {
  const content = getArticleContent(params.slug);
  
  // Dynamic category mapping to colors
  const categoryColors: Record<string, string> = {
    "MINDSET": "var(--category-mindset)",
    "PRICING": "var(--category-pricing)",
    "NO-CODE": "var(--category-no-code)",
    "LAUNCH": "var(--category-launch)",
    "ARCHITECTURE": "var(--category-architecture)"
  };

  const accentColor = categoryColors[content.category] || "#000000";

  return (
    <div className="bg-white min-h-screen pt-32 pb-32 text-[#1A1A2D]">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/blog" className="font-mono text-sm uppercase tracking-widest text-[#999999] hover:text-[#444444] transition-colors inline-block mb-12">
          &larr; Back to The Letter
        </Link>

        {/* Article Header */}
        <div className="font-mono text-[11px] uppercase tracking-widest font-bold mb-4" style={{ color: accentColor }}>
          [ {content.category} ]
        </div>
        <h1 className="font-sans text-[48px] md:text-[64px] font-bold uppercase tracking-tighter leading-[0.95] mb-8">
          {content.title}
        </h1>
        
        {/* Author Byline Injection */}
        <div className="mb-16">
          <AuthorByline />
        </div>

        {/* Article Body Placeholder */}
        <div className="font-serif text-[18px] md:text-[20px] leading-[1.7] text-[#444444] space-y-6">
          {content.paragraphs}
        </div>
        
      </div>
    </div>
  );
}
