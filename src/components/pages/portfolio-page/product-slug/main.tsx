import { CaseStudyDisplay } from "@/components/cards/product";
import { Section } from "@/components/elements";
import CaseImage from "@/assets/images/project-display.png";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export default function PortfolioSlugMain() {
    return (
        <Section>
            <div className="mb-10 lg:mb-20">
                <div>
                    <h4
                        className={`${inter.className} text-second-110 mb-4 text-[0.6985rem]/[1rem] font-medium uppercase antialiased lg:mb-10 lg:text-base/[100%]`}
                    >
                        Duration: 8 weeks
                    </h4>
                    <div className="mb-[40px] flex flex-col justify-between gap-[16px] md:flex-row md:gap-0">
                        <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                            Lorem ipsum dolor sit amet consectetur. Viverra
                            adipiscing urna orci nisi. Cras laoreet mauris sit
                            vestibulum. Quam accumsan eget est non nunc. Euismod
                            enim ut ac elementum a ac non.
                        </p>
                        <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                            Lorem ipsum dolor sit amet consectetur. Viverra
                            adipiscing urna orci nisi. Cras laoreet mauris sit
                            vestibulum. Quam accumsan eget est non nunc. Euismod
                            enim ut ac elementum a ac non.
                        </p>
                    </div>
                </div>
                <div>
                    <CaseStudyDisplay
                        image={CaseImage}
                        className="lg:!w-full"
                    />
                </div>
            </div>
            <div className="mb-20 flex flex-col gap-[40px] lg:flex-row lg:justify-between xl:gap-[60px]">
                <div className="xl:w-[292px]">
                    <h3>Feature 1</h3>
                    <p className="text-second-110 my-[24px] text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[256px]">
                        Lorem ipsum dolor sit amet consectetur. Viverra
                        adipiscing urna orci nisi.
                    </p>
                    <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[256px]">
                        Lorem ipsum dolor sit amet consectetur. Viverra
                        adipiscing urna orci nisi.
                    </p>
                </div>
                <div className="flex flex-col gap-[24px] lg:flex-row">
                    <CaseStudyDisplay image={CaseImage} />
                    <CaseStudyDisplay image={CaseImage} />
                </div>
            </div>
            <div className="flex flex-col gap-[40px] lg:flex-row lg:justify-between xl:gap-[60px]">
                <div className="xl:w-[292px]">
                    <h3 className="mb-[24px]">Others:</h3>
                    <ul className="text-second-110 list-disc pl-6 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[256px]">
                        <li>Feature</li>
                        <li>Feature</li>
                        <li>Feature</li>
                        <li>Feature</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[24px] md:flex-row">
                    <CaseStudyDisplay image={CaseImage} />
                    <CaseStudyDisplay image={CaseImage} />
                </div>
            </div>
            <div></div>
        </Section>
    );
}
