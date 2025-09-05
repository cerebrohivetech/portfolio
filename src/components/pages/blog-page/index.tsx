import Button from "@/components/button";
import { CaseStudyDisplay } from "@/components/cards";
import { Section } from "@/components/elements";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BlogDetail, BlogSlugHero } from "./blog-slug";

export function Blogs() {
    return (
        <Section className="bg-[url('/bg-image.svg')]">
            <RecentBlog />
            <BlogList />
        </Section>
    );
}

// recent blog
function RecentBlog() {
    return (
        <div className="mb-20">
            <div className="mb-[24px]">
                <span className="text-first-30 text-xs/[1rem] font-semibold md:text-base lg:text-xl/normal">
                    Most recent
                </span>
                <h2>Why your product should not be an app</h2>
                <Publisher name="Nwanozie Promise" date="23rd May, 2024" />
            </div>
            <CaseStudyDisplay
                className="mb-[24px] !w-full"
                image="/images/project-display.png"
                isBlur={true}
            />
            <div className="mb-[32px] flex flex-col justify-between gap-[16px] md:flex-row md:gap-0">
                <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Viverra adipiscing
                    urna orci nisi. Cras laoreet mauris sit vestibulum. Quam
                    accumsan eget est non nunc. Euismod enim ut ac elementum a
                    ac non.
                </p>
                <p className="text-second-110 text-sm/snug font-normal md:text-base lg:text-lg/loose xl:w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Viverra adipiscing
                    urna orci nisi. Cras laoreet mauris sit vestibulum. Quam
                    accumsan eget est non nunc. Euismod enim ut ac elementum a
                    ac non.
                </p>
            </div>
            <Button text="Keep reading" variant="standard" link="/blog/blog1" />
        </div>
    );
}
type PublisherProp = {
    name: string;
    date: string;
    img?: string | StaticImageData;
};
export function Publisher(props: PublisherProp) {
    const { name, date, img } = props;

    return (
        <div className="mt-2 mb-3.5 flex items-center gap-1">
            <div className="bg-second-110 h-[48px] w-[48px] overflow-hidden rounded-full">
                {img && (
                    <Image
                        className="h-full w-full object-cover"
                        src={img}
                        alt="profile-img"
                    />
                )}
            </div>
            <div>
                <p className="text-sm/snug font-semibold">{name}</p>
                <span className="text-first-30 text-sm/snug font-normal">
                    Published {date}
                </span>
            </div>
        </div>
    );
}

// other blogs
export function BlogList() {
    return (
        <div>
            <h2 className="mb-6">Other posts</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
        </div>
    );
}

function BlogItem() {
    return (
        <div className="relative w-full 2xl:w-[386px]">
            <CaseStudyDisplay
                image="/images/project-display.png"
                className="!w-full !pt-[24px] md:!h-[420px]"
            />
            <div className="mt-5">
                <h3 className="mb-3">Feature 1</h3>
                <Publisher
                    name="Nwanozie Promise"
                    date="23rd May, 2024"
                    img="/images/profile2.png"
                />
                <p className="text-second-110 w-full text-sm/snug font-normal md:text-base lg:text-lg/loose">
                    Lorem ipsum dolor sit amet consectetur. Viverra adipiscing
                    urna orci nisi.
                </p>
                <Link
                    href="/blog/blog1"
                    className="absolute inset-0 z-20 block h-full w-full"
                ></Link>
            </div>
        </div>
    );
}

export { BlogDetail, BlogSlugHero };
