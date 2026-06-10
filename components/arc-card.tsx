import type { ReactNode } from "react";

type ArcCardProps = {
  children: ReactNode;
  tone?: "dark" | "green" | "orange" | "outline";
  className?: string;
};

const toneClass = {
  dark: "bg-surface text-foreground",
  green: "bg-primary text-[#111111]",
  orange: "bg-secondary text-[#111111]",
  outline: "bg-surface text-foreground",
};

export function ArcCard({ children, tone = "dark", className = "" }: ArcCardProps) {
  return (
    <div className={`gradient-shell ${className}`}>
      <div className={`h-full p-6 sm:p-8 ${toneClass[tone]}`}>{children}</div>
    </div>
  );
}
