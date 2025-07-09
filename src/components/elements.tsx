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
            className={`px-[20px] py-[40px] text-white xl:px-[100px] xl:py-[80px] ${className ? className : ""}`}
        >
            {children}
        </section>
    );
}
