import { Companies } from "../cards";
import { Hero } from "../elements";

export default function AboutHero() {
    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <p className="text-first-60 mb-[8px] text-xs/[1rem] font-semibold md:mb-[12px] md:text-xl/normal">
                    Build, ship, scale
                </p>
                <h1 className="mb-[24px] w-[280px] font-semibold sm:w-[400px] md:mb-[56px] md:w-[600px] lg:w-[680px] xl:w-[800px]">
                    We are the team you need for fast, seamless technology
                </h1>
                <div>
                    <p className="mb-[24px] text-[0.6875rem]/[1rem] font-semibold uppercase md:mb-[40px] md:text-lg/[100%]">
                        we have worked with several credible brands
                    </p>
                    <Companies />
                </div>
            </div>
        </Hero>
    );
}
