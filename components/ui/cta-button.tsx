import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export function CtaButton({ href, onClick, children, className }: CtaButtonProps) {
    const baseStyles = "inline-flex items-center justify-center bg-[#DFFF4F] text-black text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-full transition-all hover:bg-[#DFFF4F]/90";

    if (href) {
        return (
            <Link href={href} className={cn(baseStyles, className)}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={cn(baseStyles, className)}>
            {children}
        </button>
    );
}
