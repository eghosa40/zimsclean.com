import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
    href?: string;
    children: ReactNode;
    variant?: "primary" | "accent" | "ghost";
    size?: "md" | "lg";
};

const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2";

const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
};

export default function Button({
                                   href,
                                   children,
                                   variant = "primary",
                                   size = "md",
                               }: Props) {
    const cls =
        variant === "primary"
            ? `${base} ${sizes[size]} text-white bg-[var(--brand-blue)] hover:bg-[#0858d8] focus-visible:ring-[var(--brand-blue)]`
            : variant === "accent"
                ? `${base} ${sizes[size]} text-black bg-[var(--brand-yellow)] hover:bg-[#e6af12] focus-visible:ring-[var(--brand-yellow)]`
                : `${base} ${sizes[size]} text-[var(--ink-900)] border border-[var(--line)] bg-white hover:bg-[#f6f8fb] focus-visible:ring-[#cbd5e1]`;

    if (!href) return <button className={cls}>{children}</button>;

    const isInternal = href.startsWith("/") && !href.startsWith("//");
    return isInternal ? (
        <Link href={href} className={cls}>
            {children}
        </Link>
    ) : (
        <a href={href} className={cls}>
            {children}
        </a>
    );
}