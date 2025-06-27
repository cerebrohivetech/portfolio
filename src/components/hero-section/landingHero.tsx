import Button from "../button";
import Image from "next/image";
import ArtWork from '@/assets/images/frame-102.svg'



export default function LandingHero() {
    return (
        <section className="bg-white w-full">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] lg:px-[100px] md:pt-[96px] md:pb-[136px] flex flex-col lg:flex-row gap-[24px] md:gap-[30px] lg:gap-[50px] xl:gap-[80px]">
                <h1 className="font-semibold text-[1.75rem]/[2rem] sm:text-[2.75rem]/[3rem] gitmd:text-[3.5rem]/[4rem] text-second-10 ">We build tech solutions for businesses</h1>
                <div className="flex flex-col gap-[24px] md:gap-[32px] items-start">
                    <p className="w-[335px] 2xl:w-[490px] text-sm/[1.375rem] md:text-[1.125rem]/[1.875rem] font-normal">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses solving problems within
                        the African space.
                    </p>
                    <Button text="Get a quote" variant="standard" />
                </div>
            </div>
            <div className="w-full h-[320px] md:h-[480px] img-shadow">
                <Image src={ArtWork} alt="" className="size-full object-cover img-shadow" />
            </div>
        </section>
    );
}
