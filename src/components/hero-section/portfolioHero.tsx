import Button from "../button";
import { Companies } from "../cards";
import { Hero } from "../elements";

export default function PortfolioHero() {
    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[48px] sm:px-[40px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <div className="mb-[30px] flex flex-col gap-[24px] md:mb-[45px] md:gap-[30px] lg:flex-row lg:gap-[50px] xl:mb-[54px] xl:gap-[80px]">
                    <h1 className="text-second-10 font-semibold">
                        Tech solutions accross various industries
                    </h1>
                    <div className="flex flex-col items-start gap-[24px] md:gap-[32px]">
                        <p className="w-[335px] text-sm/[1.375rem] font-normal md:text-[1.125rem]/[1.875rem] 2xl:w-[490px]">
                            We are the perfect software and hardware technology
                            outsourcing firm for businesses solving problems
                            within the African space.
                        </p>
                        <Button
                            text="Get a quote"
                            variant="standard"
                            link="/get_quote"
                        />
                    </div>
                </div>
                <div>
                    <p className="mb-[24px] text-[0.6875rem]/[1rem] font-semibold uppercase md:mb-[40px] md:text-lg/[100%]">
                        credible brands use cerebrohive
                    </p>
                    <Companies />
                </div>
            </div>
        </Hero>
    );
}
