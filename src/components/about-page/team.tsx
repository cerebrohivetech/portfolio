import { StaticImageData } from "next/image";
import { Section } from "../elements";

export default function Team() {
    const className = "md:w-[292px] 2xl:w-[292px] lg:w-[250px] max-w-[350px]";
    return (
        <Section>
            <div className="mb-[40px] flex flex-col gap-[40px] md:flex-row md:gap-[100px] lg:justify-between lg:gap-[144px]">
                <div>
                    <h2 className="mb-6">Meet the team</h2>
                    <p className="text-second-110 w-full max-w-[320px] text-sm/snug font-normal lg:text-lg/[1.875rem] xl:w-[488px]">
                        We are the perfect software and hardware technology
                        outsourcing firm for businesses proving solutions to
                        problems within the African space.
                    </p>
                </div>
                <Profile
                    fullname="First and Last name"
                    role="Role in company"
                    size="w-full md:w-[300px] lg:w-[400px] 2xl:w-[608px]"
                    className="relative right-0 md:-right-5 lg:right-0 xl:right-14 2xl:right-19"
                />
            </div>
            <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 lg:gap-0 xl:grid-cols-4">
                <Profile
                    fullname="First and Last name"
                    role="Role in company"
                    size={className}
                />
                <Profile
                    fullname="First and Last name"
                    role="Role in company"
                    size={className}
                />
                <Profile
                    fullname="First and Last name"
                    role="Role in company"
                    size={className}
                />
                <Profile
                    fullname="First and Last name"
                    role="Role in company"
                    size={className}
                />
            </div>
        </Section>
    );
}

type ProfileProp = {
    className?: string;
    fullname: string;
    role: string;
    image?: string | StaticImageData;
    size: string;
};

function Profile(props: ProfileProp) {
    const { className, fullname, role, image, size } = props;
    return (
        <div className={className}>
            <div
                className={`${size} bg-second-110 mb-[20px] h-[300px] w-full grid-rows-1`}
            >
                {image ? "" : ""}
            </div>
            <h4 className="text-second-110 mb-2 text-lg/normal font-semibold">
                {fullname}
            </h4>
            <p className="text-second-100 text-base/normal">{role}</p>
        </div>
    );
}
