import Footer from "@/components/Footer";

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NO NAVBAR FOR FUNNEL TRACES */}
      <main className="flex-grow bg-absolute-black">
        {children}
      </main>

      <Footer />
    </div>
  );
}
