"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FormProp = {
    children: ReactNode;
    title: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContactForm(props: FormProp) {
    const { children, title, onSubmit } = props;

    return (
        <motion.div
            className="relative md:w-[600px] lg:w-[770px]"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
            }}
        >
            <p className="text-second-110 mb-[24px] text-base/normal font-normal xl:mb-10 xl:h-[30px] xl:text-[1.125rem]/[1.875rem]">
                {title}
            </p>

            <form
                action=""
                className="bg-second-20 border-first-110 rounded-xl border-1 px-[16px] py-[24px] xl:px-[24px] xl:py-[32px]"
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </motion.div>
    );
}
