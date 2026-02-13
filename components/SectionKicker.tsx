interface SectionKickerProps {
  text: string;
}

export default function SectionKicker({ text }: SectionKickerProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-2 h-2 bg-white" />
      <span className="text-[11px] font-mono tracking-[0.3em] text-white uppercase">
        {text}
      </span>
    </div>
  );
}

