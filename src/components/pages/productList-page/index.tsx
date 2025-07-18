import { CaseStudyDisplay } from "@/components/cards/product";
import { Section } from "@/components/elements";
import CaseImage from "@/assets/images/project-display.png";
import Button from "@/components/button";

export default function ProductListing() {
    return (
        <Section className="flex flex-col gap-20 !bg-[url('/bg-image.svg')]">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Section>
    );
}

function ProductItem() {
    return (
        <div>
            <div className="mb-[24px]">
                <h2>Jackobian Readers&apos; App</h2>
                <span className="text-first-30 text-xs/[1rem] md:text-base lg:text-xl/normal font-semibold">
                    Category: Edtech
                </span>
            </div>
            <CaseStudyDisplay
                className="mb-[24px] !w-full"
                image={CaseImage}
                isBlur={true}
            />
            <div className="mb-[32px] flex flex-col justify-between gap-[16px] md:flex-row md:gap-0">
                <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Viverra adipiscing
                    urna orci nisi. Cras laoreet mauris sit vestibulum. Quam
                    accumsan eget est non nunc. Euismod enim ut ac elementum a
                    ac non.
                </p>
                <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Viverra adipiscing
                    urna orci nisi. Cras laoreet mauris sit vestibulum. Quam
                    accumsan eget est non nunc. Euismod enim ut ac elementum a
                    ac non.
                </p>
            </div>
            <Button text="Find on Playstore" variant="standard" link="/" />
        </div>
    );
}
