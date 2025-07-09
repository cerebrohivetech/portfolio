import { ReactNode } from "react";

export function Section({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`px-[20px] py-[40px] text-white md:px-[40px] md:py-[80px] xl:px-[100px] xl:py-[80px] ${className ? className : ""}`}
        >
            {children}
        </section>
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
