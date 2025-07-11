"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/cerebro-hive-logo.svg";
import Menu from "@/assets/svg/menu.svg";
import { useState } from "react";
import Button from "../button";

export function Header() {
    const [showNav, setShowNav] = useState(false);

    function handleShowNav() {
        setShowNav((prevNav) => !prevNav);
    }
    return (
        <header className="shadow-first-60/[10%] md:shadow-first-60/[25%] relative flex h-[98px] w-full items-center justify-between bg-white p-[20px] shadow-sm md:px-[30px] md:shadow-lg lg:px-[50px] xl:px-[100px]">
            <Link href="/">
                <Image
                    src={Logo}
                    alt="CerebroHive Tech"
                    className="h-[40px] w-[209px] object-cover md:h-[56px] md:w-[208px]"
                />
            </Link>
            {showNav && <MobileMenu showNav={showNav} />}
            <nav className="hidden md:flex md:h-0 md:w-full md:items-center md:justify-end md:bg-transparent md:py-0 md:shadow-none">
                <ul className="items-center md:flex">
                    <li className="text-second-70 mr-[30px] text-xs font-[400] lg:text-base">
                        <Link href="/about">About us</Link>
                    </li>
                    <li className="text-second-70 mr-[30px] text-xs font-[400] lg:text-base">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="text-second-70 mr-[30px] text-xs font-[400] lg:text-base">
                        <Link href="/products">Our Products</Link>
                    </li>
                    <li className="text-second-70 mr-[30px] text-xs font-[400] lg:text-base">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="text-second-70 mr-[30px] text-xs font-[400] lg:text-base">
                        <Link href="contact">Contact us</Link>
                    </li>
                </ul>
                <Button
                    text="Get a quote"
                    variant="standard"
                    link="/get_quote"
                />
            </nav>
            <button
                type="button"
                title="menu bar"
                className="outline-first-30 rounded-sm focus:outline-3 md:hidden"
                onClick={handleShowNav}
            >
                <Image src={Menu} alt="" className="h-[34px] w-[34px]" />
            </button>
        </header>
    );
}

function MobileMenu({ showNav }: { showNav: boolean }) {
    const className = "text-second-70 mr-[30px] mb-3 text-xs font-[400]";

    return (
        <nav
            className={`shadow-second-70/[25%] ${showNav ? "absolute" : "hidden"} inset-x-0 inset-y-[98px] z-50 flex h-[200px] w-full items-start justify-between bg-white px-[40px] py-[40px] shadow-sm md:hidden`}
        >
            <ul className="items-center md:flex">
                <li className={className}>
                    <Link href="/about">About us</Link>
                </li>
                <li className={className}>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className={className}>
                    <Link href="/products">Our Products</Link>
                </li>
                <li className={className}>
                    <Link href="">Blog</Link>
                </li>
                <li className={className}>
                    <Link href="/contact">Contact us</Link>
                </li>
            </ul>
            <Button text="Get a quote" variant="standard" link="/get_quote" />
        </nav>
    );
}
