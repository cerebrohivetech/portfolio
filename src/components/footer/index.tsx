import Link from "next/link";
import { Section } from "../elements";
import Image, { StaticImageData } from "next/image";
import XLogo from "@/assets/svg/simple-icons_x.svg";
import MailLogo from "@/assets/svg/tabler_mail.svg";
import LinkedInLogo from "@/assets/svg/mingcute_linkedin-line.svg";

export function Footer() {
    return (
        <Section className="relative !pb-0">
            <div className="mb-[40px] flex flex-col gap-[24px] sm:flex-row sm:items-center sm:justify-between">
                <div className="w-[251px] xl:w-[300px]">
                    <h3>Cerebrohive Technologies</h3>
                    <p className="text-second-110 my-[24px] text-sm/snug font-normal xl:text-base/normal">
                        Software outsourcing company based in Nigeria
                    </p>

                    <div className="flex gap-[24px]">
                        <Icon src={XLogo} alt="check us out on X" />
                        <Icon src={MailLogo} alt="check us out on Gmail" />
                        <Icon
                            src={LinkedInLogo}
                            alt="check us out on LinkedIn"
                        />
                    </div>
                </div>
                <Navbar />
            </div>
            <hr className="border-second-70 absolute inset-x-4.5 border-1 md:inset-x-0" />
            <div className="flex justify-center py-[24px] md:py-[40px]">
                <p className="text-second-90 text-[0.6875rem]/[1rem] font-light md:text-base/normal">
                    All rights reserved &copy; Cerebrohive Technologoes,
                    2024{" "}
                </p>
            </div>
        </Section>
    );
}

function Icon({ src, alt }: { src: string | StaticImageData; alt: string }) {
    return (
        <Link href="">
            <Image src={src} alt={alt} className="h-[24px] w-[24px]" />
        </Link>
    );
}

function Navbar() {
    const className =
        "md:text-base/normal text-sm/snug font-normal text-second-110";
    return (
        <nav>
            <ul className="flex flex-col gap-[16px] sm:flex-row xl:gap-[30px]">
                <li className={className}>
                    <Link href="/#services">Services</Link>
                </li>
                <li className={className}>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className={className}>
                    <Link href="/contact">Contact us</Link>
                </li>
                <li className={className}>
                    <Link href="/get_quote">Get a quote</Link>
                </li>
            </ul>
        </nav>
    );
}
