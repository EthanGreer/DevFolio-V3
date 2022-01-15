import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "success" | "warning" | "danger";
}

const variantClasses = {
  default: "bg-surface-800 text-surface-300 border-surface-700",
  brand: "bg-brand-600/20 text-brand-300 border-brand-500/30",
  success: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
  warning: "bg-amber-600/20 text-amber-300 border-amber-500/30",
  danger: "bg-red-600/20 text-red-300 border-red-500/30",
};

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
