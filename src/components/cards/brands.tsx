"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandCard() {
    return (
        <div className="mb-[56px] flex flex-col gap-[24px] sm:gap-[30px] md:flex-row md:gap-[50px] lg:mb-[70px] lg:gap-[60px] xl:mb-[88px] xl:justify-between">
            <h2 className="md:w-[170px] lg:w-[230px] xl:w-[292px]">
                Portfolio
            </h2>
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                }}
                className="flex flex-col gap-[24px] sm:gap-[30px] xl:gap-[40px]"
            >
                <p className="text-second-110 text-[0.6875rem]/[1rem] font-medium uppercase md:text-[0.875rem]/[1.125rem] xl:text-[1.125rem]/[100%]">
                    credible brands use cerebrohive
                </p>
                <Companies />
            </motion.div>
        </div>
    );
}

export function Companies() {
    const companyList = [
        "/svg/GUARANTY Trust Bank - jpeg 0.svg",
        "/svg/Paystack - png 0.svg",
        "/svg/Harvard University - png 0.svg",
        "/svg/Stripe - jpeg 0.svg",
        "/svg/PayPal - png 0.svg",
    ];

    return (
        <ul className="flex justify-between md:w-[550px] lg:w-[700px] xl:w-[888px] xl:gap-[142px]">
            {companyList.map((icon, index) => (
                <li
                    key={index}
                    className="md:-h-[50px] h-[32px] w-[32px] sm:h-[40px] sm:w-[40px] md:w-[50px] lg:h-[60px] lg:w-[60px] xl:h-[64px] xl:w-[64px]"
                >
                    <IconImage src={icon} alt="" />
                </li>
            ))}
        </ul>
    );
}

function IconImage({
    src,
    alt,
    url,
}: {
    src: string;
    alt: string;
    url?: string;
}) {
    return (
        <Link href={url ? url : ""}>
            <Image src={src} alt={alt} />
        </Link>
    );
}
