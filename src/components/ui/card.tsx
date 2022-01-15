import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = false, className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 ${
          hoverable
            ? "hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:shadow-brand-600/5 hover:-translate-y-1 transition-all duration-300"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
