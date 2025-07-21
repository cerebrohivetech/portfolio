import Button from "../../button";
import { Section } from "../../elements";
import RightArrowicon from "@/assets/svg/ep_top-right.svg";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export default function Services() {
    return (
        <Section>
            <h4
                className={`${inter.className} text-second-110 mb-[8px] text-[0.6875rem]/[1rem] font-semibold uppercase md:mb-[24px] md:text-lg/[100%]`}
            >
                Our services
            </h4>

            <div className="flex flex-col gap-[56px] lg:gap-[96px]">
                <IndividualService
                    title="Mobile App Development"
                    firstParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    secondParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    link=""
                />
                <IndividualService
                    title="Web development"
                    firstParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    secondParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    link=""
                />
                <IndividualService
                    title="Embedded systems development"
                    firstParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    secondParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    link=""
                />
                <IndividualService
                    title="Engineering augmentation"
                    firstParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    secondParagraph="Lorem ipsum dolor sit amet consectetur. Viverra adipiscing urna orci nisi. Cras laoreet mauris sit vestibulum. Quam accumsan eget est non nunc. Euismod enim ut ac elementum a ac non."
                    link=""
                />
            </div>
        </Section>
    );
}

type ServiceProp = {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    link: string;
};
function IndividualService(props: ServiceProp) {
    const { title, firstParagraph, secondParagraph, link } = props;

    return (
        <div>
            <h2 className="mb-[24px]">{title}</h2>

            <div className="mb-[24px] flex flex-col gap-[24px] text-sm/snug text-[#E3E1E1] md:flex-row lg:gap-[40px] lg:text-xl/[2.35rem] [&>p]:w-full md:[&>p]:w-[580px]">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
            </div>
            <Button
                text="View case studies"
                variant="normal"
                icon={RightArrowicon}
                link={link}
            />
        </div>
    );
}
