"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Testimonials } from "@/lib/dummyData";
import { Section } from "../../elements";
import { motion } from "framer-motion";

type TestimonyProp = {
    description: string;
    image: string | StaticImageData;
    username: string;
};

export default function Testimonial() {
    const testimonials = Testimonials;

    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <Section className="flex flex-col gap-[16px] text-white md:flex-row md:gap-20 xl:items-center xl:gap-[120px]">
            <h2 className="relative ml-[8px] sm:ml-0 md:top-4 md:w-[292px] xl:-top-12 xl:h-[132px] xl:w-[292px]">
                What our clients are saying
            </h2>
            <motion.div
                className="relative overflow-hidden rounded-lg lg:w-[80%] xl:h-[310px] 2xl:w-[888px]"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                }}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            className="flex w-full flex-shrink-0 flex-col justify-between gap-[40px] p-2 lg:flex-row"
                        >
                            {testimonials
                                .slice(
                                    pageIndex * testimonialsPerPage,
                                    (pageIndex + 1) * testimonialsPerPage
                                )
                                .map((testimonial) => (
                                    <Testimony
                                        key={testimonial.id}
                                        description={testimonial.description}
                                        image={testimonial.image}
                                        username={testimonial.name}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
                <div className="relative left-0 mt-8 ml-[10px] flex space-x-2 xl:ml-[45px]">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`h-[16px] w-[16px] rounded-full transition-all duration-300 ${index === currentPage ? "bg-first-50" : "bg-second-80"} focus:outline-none`}
                            aria-label={`Go to testimonial page ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}

function Testimony(props: TestimonyProp) {
    const { description, image, username } = props;

    return (
        <div className="px-0 py-[16px] sm:w-[80%] md:w-[300px] lg:w-[30%] xl:h-[240px] xl:px-[40px] xl:py-[32px] 2xl:w-[269px]">
            <p className="mb-0 text-sm/[1.375rem] font-light text-[#CFCFCF] sm:text-base/[1.75rem] xl:mb-[16px] xl:h-[128px] xl:w-[189px] xl:text-[1.25rem]/[2rem]">
                {description}
            </p>
            <div className="flex items-center gap-2 pt-[16px] xl:pt-[26px]">
                <div className="h-[32px] w-[32px] overflow-hidden rounded-full object-center">
                    <Image src={image} alt="profile image" />
                </div>
                <span className="text-second-110 text-base/[1.5rem] font-normal">
                    {username}
                </span>
            </div>
        </div>
    );
}
