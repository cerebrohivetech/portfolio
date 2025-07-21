import Image from "next/image";
import Product from "@/components/cards/product";
import { Section } from "@/components/elements";
import CaseImage from "@/assets/images/project-display.png";
import ProfileImage from "@/assets/images/profile.png";

export default function ProductList() {
    // product state should be store here
    return (
        <Section className="text-white shadow-xl shadow-[#10182840]">
            <div className="flex flex-col gap-[64px]">
                {/* product-container will take the state and create the ui representation  */}
                <ProductContainer />
            </div>
        </Section>
    );
}

function ProductContainer() {
    return (
        <>
            <div>
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
                <div className="mt-[40px] flex flex-col gap-[16px] md:gap-[40px] lg:flex-row lg:justify-between xl:mt-[64px] xl:gap-[60px]">
                    <h3 className="lg:w-[292px]">User Feedback</h3>
                    <div className="flex flex-col gap-[24px] md:flex-row">
                        <UserFeedback />
                        <UserFeedback />
                    </div>
                </div>
            </div>
            <div>
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
                <div className="mt-[40px] flex flex-col gap-[16px] md:gap-[40px] lg:flex-row lg:justify-between xl:mt-[64px] xl:gap-[60px]">
                    <h3 className="lg:w-[292px]">User Feedback</h3>
                    <div className="flex flex-col gap-[24px] md:flex-row">
                        <UserFeedback />
                        <UserFeedback />
                    </div>
                </div>
            </div>
            <div>
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
                <div className="mt-[40px] flex flex-col gap-[16px] md:gap-[40px] lg:flex-row lg:justify-between xl:mt-[64px] xl:gap-[60px]">
                    <h3 className="lg:w-[292px]">User Feedback</h3>
                    <div className="flex flex-col gap-[24px] md:flex-row">
                        <UserFeedback />
                        <UserFeedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export function UserFeedback() {
    return (
        <div className="py-[12px]">
            <p className="xl:text-[1.125rem]/[1.8765]rem] mb-0 text-sm/[1.375rem] font-light text-[#CFCFCF] sm:text-base/[1.75rem] xl:mb-[16px] xl:h-auto xl:w-[424px]">
                Lorem ipsum dolor sit amet consectetur. Eget consectetur sem
                volutpat felis.
            </p>
            <div className="flex items-center gap-2 pt-[16px] xl:pt-[26px]">
                <div className="h-[32px] w-[32px] overflow-hidden rounded-full object-center">
                    <Image src={ProfileImage} alt="profile image" />
                </div>
                <span className="text-second-110 text-base/[1.5rem] font-normal">
                    Name
                </span>
            </div>
        </div>
    );
}
