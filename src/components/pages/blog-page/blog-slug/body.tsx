import { CaseStudyDisplay } from "@/components/cards";
import { Section } from "@/components/elements";
import CaseImage from "@/assets/images/project-display.png";
import { BlogList } from "..";
import Image from "next/image";
import ShareIcon from "@/assets/svg/mdi_share-outline.svg";
import XIcon from "@/assets/svg/share_x.svg";
import Link from "next/link";

export function BlogDetail() {
    return (
        <Section className="bg-[url('/bg-image.svg')]">
            <div className="mb-10 md:mb-15 xl:mb-20">
                <div className="mb-[32px] flex flex-col justify-between gap-[16px] md:flex-row md:gap-0">
                    <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                        Lorem ipsum dolor sit amet consectetur. Viverra
                        adipiscing urna orci nisi. Cras laoreet mauris sit
                        vestibulum. Quam accumsan eget est non nunc. Euismod
                        enim ut ac elementum a ac non.
                    </p>
                    <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                        Lorem ipsum dolor sit amet consectetur. Viverra
                        adipiscing urna orci nisi. Cras laoreet mauris sit
                        vestibulum. Quam accumsan eget est non nunc. Euismod
                        enim ut ac elementum a ac non.
                    </p>
                </div>
                <CaseStudyDisplay
                    className="mb-[24px] !w-full"
                    image={CaseImage}
                    isBlur={true}
                />
            </div>
            <div className="mx-auto mb-10 w-full xl:mb-20 xl:w-[840px]">
                <p className="mb-6 w-full text-sm/snug font-normal text-[#E3E1E1] md:text-base xl:text-lg/loose">
                    Lorem ipsum dolor sit amet consectetur. Purus gravida vitae
                    netus neque sit sit. Non tortor ut sed elit a morbi at
                    bibendum. Scelerisque malesuada sit est mauris purus congue
                    sagittis sagittis. Id etiam cras commodo nullam urna nec at.
                    Egestas vivamus volutpat turpis urna.
                    <br />
                    Cursus habitant natoque hendrerit amet eu interdum. A eu
                    ipsum luctus ut sed nibh. Posuere porttitor eu ut nibh
                    porttitor. Rhoncus ipsum enim ut ut odio fermentum nisi.
                    Donec libero a sodales sed proin blandit. Pretium magna
                    consectetur duis amet maecenas. Nunc sit sed nulla posuere
                    amet.
                    <br />
                    Pellentesque eget id commodo netus mi ac donec diam. Justo
                    eget vitae lectus rhoncus sagittis nulla dui phasellus.
                    Pretium iaculis ultrices tempor tristique eget facilisis
                    pretium viverra. Nec aliquam ultrices consequat integer
                    metus eget. Id ut sit risus elit elementum quis arcu at.
                    Tristique a nisi ut faucibus.
                </p>
                <p className="mb-6 w-full text-sm/snug font-normal text-[#E3E1E1] md:text-base xl:text-lg/loose">
                    Lorem ipsum dolor sit amet consectetur. Purus gravida vitae
                    netus neque sit sit. Non tortor ut sed elit a morbi at
                    bibendum. Scelerisque malesuada sit est mauris purus congue
                    sagittis sagittis. Id etiam cras commodo nullam urna nec at.
                    Egestas vivamus volutpat turpis urna.
                    <br />
                    Cursus habitant natoque hendrerit amet eu interdum. A eu
                    ipsum luctus ut sed nibh. Posuere porttitor eu ut nibh
                    porttitor. Rhoncus ipsum enim ut ut odio fermentum nisi.
                    Donec libero a sodales sed proin blandit. Pretium magna
                    consectetur duis amet maecenas. Nunc sit sed nulla posuere
                    amet.
                    <br />
                    Pellentesque eget id commodo netus mi ac donec diam. Justo
                    eget vitae lectus rhoncus sagittis nulla dui phasellus.
                    Pretium iaculis ultrices tempor tristique eget facilisis
                    pretium viverra. Nec aliquam ultrices consequat integer
                    metus eget. Id ut sit risus elit elementum quis arcu at.
                    Tristique a nisi ut faucibus.
                </p>
                <p className="mb-6 w-full text-sm/snug font-normal text-[#E3E1E1] md:text-base xl:text-lg/loose">
                    Lorem ipsum dolor sit amet consectetur. Purus gravida vitae
                    netus neque sit sit. Non tortor ut sed elit a morbi at
                    bibendum. Scelerisque malesuada sit est mauris purus congue
                    sagittis sagittis. Id etiam cras commodo nullam urna nec at.
                    Egestas vivamus volutpat turpis urna.
                    <br />
                    Cursus habitant natoque hendrerit amet eu interdum. A eu
                    ipsum luctus ut sed nibh. Posuere porttitor eu ut nibh
                    porttitor. Rhoncus ipsum enim ut ut odio fermentum nisi.
                    Donec libero a sodales sed proin blandit. Pretium magna
                    consectetur duis amet maecenas. Nunc sit sed nulla posuere
                    amet.
                    <br />
                    Pellentesque eget id commodo netus mi ac donec diam. Justo
                    eget vitae lectus rhoncus sagittis nulla dui phasellus.
                    Pretium iaculis ultrices tempor tristique eget facilisis
                    pretium viverra. Nec aliquam ultrices consequat integer
                    metus eget. Id ut sit risus elit elementum quis arcu at.
                    Tristique a nisi ut faucibus.
                </p>
                <div className="flex justify-end gap-2">
                    <Link href="/">
                        <Image
                            src={ShareIcon}
                            alt="share post"
                            className="h-10 w-10"
                        />
                    </Link>
                    <Link href="/blog1">
                        <Image
                            src={XIcon}
                            alt="share post"
                            className="h-10 w-10"
                        />
                    </Link>
                </div>
            </div>
            <BlogList />
        </Section>
    );
}
