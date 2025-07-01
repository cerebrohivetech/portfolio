import Button from "../button";
import Image from "next/image";
import TPIcon from "@/assets/svg/ep_top-right.svg";
import PhoneFrame from "@/assets/images/phone-display.png";
import type { StaticImageData } from "next/image";

type ProductProp = {
    title: string;
    description: string;
    images: StaticImageData[] | string[];
};
export default function Product(props: ProductProp) {
    const { title, description, images } = props;

    return (
        <section className="flex flex-col gap-[40px] lg:flex-row lg:justify-between xl:gap-[60px]">
            <div className="xl:w-[292px]">
                <h3 className="text-base/[1.25rem] font-semibold xl:text-[1.5rem]/[1.75rem]">
                    {title}
                </h3>
                <p className="text-second-110 w-[256px] py-[16px] text-sm/[1.375rem] font-normal sm:w-[300px] md:w-[320px] lg:w-[256px] xl:py-[24px] xl:text-base/[1.5rem]">
                    {description}
                </p>

                <Button
                    text="View case study"
                    icon={TPIcon}
                    variant="normal"
                    link="/"
                />
            </div>
            <div className="flex flex-col gap-[24px] md:flex-row">
                <CaseStudyDisplay image={images[0]} />

                <CaseStudyDisplay image={images[1]} />
            </div>
        </section>
    );
}

function CaseStudyDisplay({ image }: { image: string | StaticImageData }) {
    return (
        <div className="bg-second-20 border-first-90 mx-auto flex h-[320px] w-full overflow-hidden rounded-xl rounded-b-none border-2 border-b-0 pt-[24px] md:h-[400px] lg:h-[560px] lg:w-[350px] lg:rounded-b-xl lg:border-b-2 lg:pt-0 xl:w-[432px]">
            <div className="m-auto">
                <CaseStudyImage src={image} alt="" />
            </div>
        </div>
    );
}

function CaseStudyImage({
    src,
    alt,
}: {
    src: string | StaticImageData;
    alt: string;
}) {
    return (
        <div className="align-items-center grid h-[490px] w-[246px] grid-cols-1 grid-rows-1 justify-items-center overflow-hidden rounded-[55px]">
            <Image
                src={PhoneFrame}
                alt=""
                className="z-10 col-start-1 row-start-1 h-full w-full"
            />
            <Image
                src={src}
                alt={alt}
                className="z-0 col-start-1 row-start-1 mt-[10px] h-[470px] w-[210px]"
            />
        </div>
    );
}
