import { Section } from "@/components/elements";
import { UserFeedback } from "./products";

export default function Testimonies() {
    return (
        <Section className="bg-[url('/bg-image.svg')]">
            <div className="flex flex-col gap-[16px] md:gap-[20px] lg:flex-row lg:justify-between">
                <h2 className="lg:w-[292px]">What our clients are saying</h2>
                <div className="grid grid-cols-1 gap-[8px] sm:gap-[16px] md:grid-cols-2 md:gap-[40px]">
                    {/* feedback is gonna take props like message, image and fullname  */}
                    <UserFeedback />
                    <UserFeedback />
                    <UserFeedback />
                    <UserFeedback />
                </div>
            </div>
        </Section>
    );
}
