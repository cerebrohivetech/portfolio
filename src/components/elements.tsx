import { ReactNode } from "react";

export function Section({
    children,
    className,
    id,
}: {
    children: ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section
            id={id}
            className={`px-[20px] py-[40px] text-white md:px-[40px] md:py-[80px] xl:px-[100px] ${className ? className : ""}`}
        >
            {children}
        </section>
    );
}

export function FooterSection({
    children,
    className,
    id,
}: {
    children: ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <footer
            id={id}
            className={`px-[20px] py-[40px] text-white md:px-[40px] md:py-[80px] xl:px-[100px] ${className ? className : ""}`}
        >
            {children}
        </footer>
    );
}

export function Hero({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <section className={`w-full bg-white ${className ? className : ""}`}>
            {children}
        </section>
    );
}
