import { Hero } from "../elements";

export default function BlogHero() {
    return (
        <Hero className="text-second-10">
            <div className="px-[20px] pt-[32px] pb-[30px] sm:px-[40px] sm:pb-[48px] md:px-[50px] md:pt-[96px] md:pb-[80px] lg:px-[100px]">
                <p className="text-first-60 mb-[8px] text-xs/[1rem] font-semibold md:mb-[12px] md:text-xl/normal">
                    Building products that scale
                </p>
                <h1 className="mb-[16px] w-[280px] font-semibold sm:w-[400px] md:mb-[32px] md:w-[600px] lg:w-[680px] xl:w-[800px]">
                    Welcome to Our Blog
                </h1>
                <p className="text-second-70 text-sm/snug font-normal sm:w-[460px] md:text-base lg:w-[530px] lg:text-lg/loose xl:w-[498px]">
                    Actionable insights on product development frameworks that
                    have helped countless businesses and hey! We have a gist
                    corner.
                </p>
            </div>
        </Hero>
    );
}
