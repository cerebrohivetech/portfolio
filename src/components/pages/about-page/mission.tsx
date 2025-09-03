import Image from "next/image";
import { Section } from "../../elements";
import CerebroLogo from "@/assets/svg/cerebro.svg";
import Button from "../../button";

export function Mission() {
    const className =
        "xl:w-[450px] sm:w-[500px] md:w-full 2xl:h-[60px] mb-[32px] 2xl:w-[608px] text-sm/snug lg:text-lg/[1.875rem] text-second-110 font-normal";
    return (
        <Section>
            <div className="mb-[24px] md:mb-[64px]">
                <p className="text-first-40 mb-[8px] text-xs/[1rem] font-semibold xl:text-xl/normal">
                    Our mission
                </p>
                <h2>Our mission</h2>
            </div>
            <div className="relative flex flex-col-reverse justify-between gap-[40px] md:flex-row md:gap-[60px] lg:gap-[80px] xl:gap-[144px]">
                <div className="relative w-full md:-top-[60px] md:h-[474px] md:w-[350px] md:shrink-0 lg:top-0 lg:w-[488px]">
                    <Image
                        src={CerebroLogo}
                        alt="Logo"
                        className="h-full w-full"
                    />
                </div>
                <div>
                    <p className={className}>
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                    <p className={className}>
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                    <p className={className}>
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                    <p className={className}>
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>

                    <Button
                        variant="standard"
                        text="Contact us"
                        link="/contact"
                    />
                </div>
            </div>
        </Section>
    );
}
