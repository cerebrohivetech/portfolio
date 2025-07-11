import Button from "../button";
import { Section } from "../elements";
import RightArrowIcon from "@/assets/svg/ep_top-right.svg";

export function PlayBook() {
    const className =
        "mb-[32px] text-sm/snug lg:text-lg/[1.875rem] text-second-110 font-normal";

    return (
        <Section className="flex flex-col gap-[24px] lg:flex-row lg:gap-20 xl:gap-[144px]">
            <div className="md:w-[488px]">
                <h2 className="mb-[24px]">Our playbook</h2>
                <p className={className}>
                    We are the perfect software and hardware technology
                    outsourcing firm for businesses proving solutions to
                    problems within the African space.
                </p>
            </div>
            <div className="bg-second-20 w-full rounded-xl bg-[url('/bg-image.svg')] px-[16px] py-[20px] sm:w-[608px] md:px-[32px] md:py-[40px]">
                <div className="mb-[32px]">
                    <h1 className="mb-[12px]">Step 1</h1>
                    <h4 className="text-second-90 sm:text-second-110 mb-[40px] text-base/normal font-medium lg:text-xl/normal">
                        User research
                    </h4>
                    <p className="text-second-110 text-sm/snug font-normal lg:text-lg/[1.875rem]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                </div>
                <div className="mb-[32px]">
                    <h1 className="mb-[12px]">Step 2</h1>
                    <h4 className="text-second-90 sm:text-second-110 mb-[40px] text-base/normal font-medium lg:text-xl/normal">
                        User research
                    </h4>
                    <p className="text-second-110 text-sm/snug font-normal lg:text-lg/[1.875rem]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                </div>
                <div className="mb-[32px]">
                    <h1 className="mb-[12px]">Step 3</h1>
                    <h4 className="text-second-90 sm:text-second-110 mb-[40px] text-base/normal font-medium lg:text-xl/normal">
                        User research
                    </h4>
                    <p className="text-second-110 text-sm/snug font-normal lg:text-lg/[1.875rem]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                </div>
                <div className="mb-[32px]">
                    <h1 className="mb-[12px]">Step 4</h1>
                    <h4 className="text-second-90 sm:text-second-110 mb-[40px] text-base/normal font-medium lg:text-xl/normal">
                        User research
                    </h4>
                    <p className="text-second-110 text-sm/snug font-normal lg:text-lg/[1.875rem]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                </div>
                <Button
                    text="View our portfolio"
                    variant="normal"
                    icon={RightArrowIcon}
                    link="/portfolio"
                />
            </div>
        </Section>
    );
}
