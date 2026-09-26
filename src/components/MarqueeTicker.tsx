import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    '⚡ 42 SYSTEMS RUNNING',
    '● INDUSTRIAL SCADA & WTP',
    '★ CIVIL S-CURVE STUDIO',
    '▲ 500 KV SUBSTATION GRID',
    '◆ OFFSHORE PETROFLOW',
    '■ SUBWAY ATS CTC',
    '⚡ MULTI-AGENT LLM MESH',
    '★ 100% LOCAL-FIRST',
    '● ZERO SERVER OVERHEAD',
    '◆ LPSE GOV PROCUREMENT',
  ];

  return (
    <div className="bg-[#FFE600] text-black border-b-[3px] border-black overflow-hidden py-1.5 font-mono text-xs font-black tracking-wider uppercase select-none">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {[...items, ...items, ...items].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span>{text}</span>
            <span className="text-black/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
