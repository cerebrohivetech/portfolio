"use client";

import { Hero } from "../../../elements";
import Image from "next/image";
import { Publisher } from "..";

export function BlogSlugHero() {
    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <Image
                    src="/svg/ep_back.svg"
                    alt=""
                    className="mb-6 h-6 w-6 md:mb-[36px]"
                />
                <h1 className="mb-2.5 font-semibold">
                    Why your product should not be an app
                </h1>
                <Publisher
                    name="Nwanozie Promise"
                    date="23rd May, 2024"
                    img="/images/profile2.png"
                />
            </div>
        </Hero>
    );
}
