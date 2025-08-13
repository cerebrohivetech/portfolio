"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/cerebro-hive-logo.svg";
import Menu from "@/assets/svg/menu.svg";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [showNav, setShowNav] = useState(false);
    const pathname = usePathname();
    const animation = {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: {
            duration: 0.8,
        },
    };

    function handleShowNav() {
        setShowNav((prevNav) => !prevNav);
    }
    return (
        <header className="shadow-first-60/[10%] md:shadow-first-60/[25%] sticky top-0 z-[100] flex h-[98px] w-full items-center justify-between bg-white p-[20px] shadow-sm md:px-[30px] md:shadow-lg lg:px-[50px] xl:px-[100px]">
            <motion.div
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
            >
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="CerebroHive Tech"
                        className="h-[40px] w-[209px] object-cover md:h-[56px] md:w-[208px]"
                    />
                </Link>
            </motion.div>

            <AnimatePresence>
                {showNav && (
                    <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                )}
            </AnimatePresence>
            <motion.nav
                className="hidden md:flex md:h-0 md:w-full md:items-center md:justify-end md:bg-transparent md:py-0 md:shadow-none"
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
            >
                <ul className="items-center md:flex">
                    <li
                        className={`text-second-70 mr-[30px] text-xs font-[400] transition-all duration-150 lg:text-base ${pathname === "/about" && "!text-first-60 border-first-60 border-b-2"}`}
                    >
                        <Link href="/about">About us</Link>
                    </li>
                    <li
                        className={`text-second-70 mr-[30px] text-xs font-[400] transition-all duration-150 lg:text-base ${pathname === "/portfolio" && "!text-first-60 border-first-60 border-b-2"}`}
                    >
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li
                        className={`text-second-70 mr-[30px] text-xs font-[400] transition-all duration-150 lg:text-base ${pathname === "/products" && "!text-first-60 border-first-60 border-b-2"}`}
                    >
                        <Link href="/products">Our Products</Link>
                    </li>
                    <li
                        className={`text-second-70 mr-[30px] text-xs font-[400] transition-all duration-150 lg:text-base ${pathname === "/blog" && "!text-first-60 border-first-60 border-b-2"}`}
                    >
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li
                        className={`text-second-70 mr-[30px] text-xs font-[400] transition-all duration-150 lg:text-base ${pathname === "/contact" && "!text-first-60 border-first-60 border-b-2"}`}
                    >
                        <Link href="/contact">Contact us</Link>
                    </li>
                </ul>
                <Button
                    text="Get a quote"
                    variant="standard"
                    link="/get_quote"
                />
            </motion.nav>
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

function MobileMenu({
    showNav,
    setShowNav,
}: {
    showNav: boolean;
    setShowNav(value: boolean): void;
}) {
    const className = "text-second-70 mr-[30px] mb-3 text-xs font-[400]";
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                navRef.current &&
                event.target &&
                !navRef.current.contains(event.target as Node)
            ) {
                setShowNav(false);
                console.log("Clicked outside!");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
                duration: 0.3,
            }}
            ref={navRef}
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
        </motion.nav>
    );
}
