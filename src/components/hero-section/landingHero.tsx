import Button from "../button";
import Image from "next/image";
import ArtWork from "@/assets/images/frame-102.svg";

export default function LandingHero() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col gap-[24px] px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:gap-[30px] md:px-[50px] md:pt-[96px] md:pb-[136px] lg:flex-row lg:gap-[50px] lg:px-[100px] xl:gap-[80px]">
                <h1 className="text-second-10 font-semibold">
                    We build tech solutions for businesses
                </h1>
                <div className="flex flex-col items-start gap-[24px] md:gap-[32px]">
                    <p className="w-[335px] text-sm/[1.375rem] font-normal md:text-[1.125rem]/[1.875rem] 2xl:w-[490px]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses solving problems within
                        the African space.
                    </p>
                    <Button text="Get a quote" variant="standard" />
                </div>
            </div>
            <div className="img-shadow h-[320px] w-full md:h-[480px]">
                <Image
                    src={ArtWork}
                    alt=""
                    // priority={true}
                    className="img-shadow size-full object-cover"
                />
            </div>
        </section>
    );
}
