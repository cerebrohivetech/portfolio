"use client"

import Button from "../button";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ProductProp = {
    title: string;
    description: string;
    images: StaticImageData[] | string[];
};
export default function Product(props: ProductProp) {
    const { title, description, images } = props;

    return (
        <section className="flex flex-col gap-[40px] lg:flex-row lg:justify-between xl:gap-[60px]">
            <div className="xl:w-[292px]">
                <h3>{title}</h3>
                <p className="text-second-110 w-[256px] py-[16px] text-sm/[1.375rem] font-normal sm:w-[300px] md:w-[320px] lg:w-[256px] xl:py-[24px] xl:text-base/[1.5rem]">
                    {description}
                </p>

                <Button
                    text="View case study"
                    icon="/svg/ep_top-right.svg"
                    variant="normal"
                    link="/portfolio/jackobian"
                />
            </div>
            <motion.div
                className="flex flex-col gap-[24px] md:flex-row"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                }}
            >
                <CaseStudyDisplay image={images[0]} />

                <CaseStudyDisplay image={images[1]} />
            </motion.div>
        </section>
    );
}

export function CaseStudyDisplay({
    image,
    className,
    isBlur,
}: {
    image: string | StaticImageData;
    className?: string;
    isBlur?: boolean;
}) {
    return (
        <div
            className={`${className} bg-second-20 border-first-90 relative mx-auto flex h-[320px] w-full overflow-hidden rounded-xl rounded-b-none border-2 border-b-0 pt-[24px] md:h-[400px] lg:h-[560px] lg:w-[350px] lg:rounded-b-xl lg:border-b-2 lg:pt-0 xl:w-[422px] 2xl:w-[432px]`}
        >
            <div className="z-10 m-auto">
                <CaseStudyImage src={image} alt="" />
            </div>
            {isBlur && (
                <div className="bg-second-110/80 absolute inset-x-[42%] inset-y-[30%] z-0 h-[200px] w-[200px] rounded-full blur-[364px]"></div>
            )}
        </div>
    );
}

function CaseStudyImage({
    src,
    alt,
}: {
    src: string | StaticImageData;
    alt: string;
}) {
    return (
        <div className="align-items-center grid h-[490px] w-[246px] grid-cols-1 grid-rows-1 justify-items-center overflow-hidden rounded-[55px]">
            <Image
                src="/images/phone-display.png"
                alt=""
                className="z-10 col-start-1 row-start-1 h-full w-full"
            />
            <Image
                src={src}
                alt={alt}
                className="z-0 col-start-1 row-start-1 mt-[10px] h-[470px] w-[210px]"
            />
        </div>
    );
}
