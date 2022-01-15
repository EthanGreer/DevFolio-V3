interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-600/20 text-brand-300 border border-brand-500/30 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-surface-400 text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
