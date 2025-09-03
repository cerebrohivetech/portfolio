"use client"

import Button from "../button";
import { Hero } from "../elements";
import { motion } from "framer-motion";
// import Image from "next/image";

export default function LandingHero() {
    return (
        <Hero className="relative text-left md:text-center">
            <div className="z-0 bg-[url('/code_bg.png')] bg-cover px-5 pt-[32px] pb-[88px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[128px] xl:pb-[124px]">
                <motion.div
                    className="relative z-10 mx-auto flex w-full flex-col items-start justify-center md:w-[654px] md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <h1 className="mb-[32px] font-semibold">
                        We build tech solutions for businesses
                    </h1>
                    <div className="flex flex-col items-start gap-[24px] md:items-center md:gap-[32px]">
                        <p className="w-[335px] text-sm/[1.375rem] font-normal sm:w-[400px] md:w-[450px] md:text-[1.125rem]/[1.875rem] xl:w-[498px] 2xl:w-[490px]">
                            We are the perfect software and hardware technology
                            outsourcing firm for businesses solving problems
                            within the African space.
                        </p>
                        <Button
                            text="Get a quote"
                            variant="standard"
                            link="/get_quote"
                            className=""
                        />
                    </div>
                </motion.div>
            </div>
        </Hero>
    );
}
