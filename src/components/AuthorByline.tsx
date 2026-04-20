export default function AuthorByline() {
  return (
    <div className="border-t border-[#E8E8E8] pt-6 mt-8 mb-10 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[#E8E8E8] flex-shrink-0 relative overflow-hidden">
        {/* Placeholder avatar until a real photo is provided */}
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-[#999999] uppercase">
          KW
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-sans font-[600] text-[#1A1A2D] text-[14px]">
          Ken West
        </div>
        <div className="font-serif italic text-[#666666] text-[12px] leading-snug">
          Founder, Bloomsday. 25+ years building digital products for global brands.
        </div>
      </div>
    </div>
  );
}
