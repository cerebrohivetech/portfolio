"use client";

import Link from "next/link";
import { Hero } from "../../../elements";
import Image from "next/image";
import arrowIcon from "@/assets/svg/ep_top-right-blue.svg";
import backIcon from "@/assets/svg/ep_back.svg";
// import { useRouter } from "next/router";

export default function PortfolioSlugHero({ title }: { title: string }) {
    // const router = useRouter();
    const className =
        "text-first-90 hidden md:block text-sm lg:text-base/[100%] font-medium uppercase";
    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <Image
                    src={backIcon}
                    alt=""
                    className="mb-6 h-6 w-6 md:mb-[36px]"
                    // onClick={() => router.back()}
                />
                <p className="text-first-60 mb-[8px] text-xs/[1rem] font-semibold md:mb-[12px] md:text-xl/normal">
                    Short tagline about product
                </p>
                <h1 className="mb-[24px] w-[280px] font-semibold sm:w-[400px] md:mb-[56px] md:w-[600px] lg:w-[680px] xl:w-[800px]">
                    {title.charAt(0).toUpperCase() + title.slice(1)} Readers App
                </h1>
                <div className="flex justify-between">
                    <Link href="" className={className}>
                        Mobile App Development
                    </Link>
                    <Link href="" className={className}>
                        Web Development
                    </Link>
                    <Link href="" className={className}>
                        User Interface Design
                    </Link>
                    <Link
                        href=""
                        className="text-first-60 border-first-60 flex items-center gap-1 border-b-2 pb-1 text-[0.6875rem]/[1rem] font-medium uppercase md:gap-2 md:pb-2 lg:text-base/[100%]"
                    >
                        <Image src={arrowIcon} alt="icon" />
                        Go to site
                    </Link>
                </div>
            </div>
        </Hero>
    );
}
