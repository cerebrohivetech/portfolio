import Button from "../button";
import { Section } from "../elements";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export function Values() {
    const className = "mb-[32px] text-sm/snug lg:text-lg/[1.875rem] text-second-110 font-normal";
    const h1ClassName = "mb-[16px] md:mb-[40px] md:text-[2.5rem]/normal";
    const pClassName = `${inter.className} uppercase text-[0.6875rem]/[1rem] md:text-[0.875rem]/[1.125rem] lg:text-[1.125rem]/[100%] text-second-90`;

    return (
        <Section className="flex flex-col gap-[64px] bg-[url('/bg-image.svg')] lg:flex-row lg:gap-20 xl:gap-[144px]">
            <div className="md:w-[488px]">
                <h2 className="mb-[24px] md:mb-[32px]">Our Values</h2>

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
                </div>

                <Button
                    variant="standard"
                    text="Get a qoute"
                    link="/get_quote"
                />
            </div>
            <div className="flex flex-col gap-[64px] md:gap-[89px]">
                <div>
                    <h1 className={h1ClassName}>52 products</h1>
                    <p className={pClassName}>shipped and deployed</p>
                </div>
                <div>
                    <h1 className={h1ClassName}>4 shipped and deployed</h1>
                    <p className={pClassName}>
                        outsourced their tech to cerebrohive
                    </p>
                </div>
                <div>
                    <h1 className={h1ClassName}>500,000</h1>
                    <p className={pClassName}>users across many countries</p>
                </div>
            </div>
        </Section>
    );
}
