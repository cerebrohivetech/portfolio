import { Companies } from "../cards";
import { Hero } from "../elements";


export default function AboutHero() {

    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <p className="text-xs/[1rem] md:text-xl/normal text-first-60 font-semibold mb-[8px] md:mb-[12px]">Build, ship, scale</p>
                <h1 className="font-semibold w-[280px] sm:w-[400px] md:w-[600px] lg:w-[680px] xl:w-[800px] mb-[24px] md:mb-[56px]">
                    We are the team you need for fast, seamless technology
                </h1>
                <div>
                    <p className="text-[0.6875rem]/[1rem] md:text-lg/[100%] font-semibold uppercase mb-[24px] md:mb-[40px]">we have worked with several credible brands</p>
                    <Companies />
                </div>
            </div>
        </Hero>
    )
}