import Button from "../button";

type ServiceCardProps = {
    title: string;
    description: string;
};
export default function Service() {
    return (
        <section className="service-shadow flex flex-col justify-between px-[20px] py-[40px] text-white md:flex-row md:px-[30px] md:py-[50px] xl:gap-[60px] xl:px-[80px] xl:py-[80px]">
            <h2 className="mb-[22px] w-[298px] text-[1.25rem]/[1.75rem] font-semibold sm:mb-[28px] lg:text-[1.75rem]/[2.1rem] xl:text-[2.5rem]/[2.75rem]">
                Services
            </h2>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-rows-2 lg:gap-[40px]">
                <ServiceCard
                    title="Mobile app development"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                />
                <ServiceCard
                    title="Embedded system development"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                />
                <ServiceCard
                    title="Web development"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                />
                <ServiceCard
                    title="Engineering augmentation"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                />
            </div>
        </section>
    );
}

function ServiceCard(props: ServiceCardProps) {
    const { title, description } = props;
    return (
        <div className="border-second-70 rounded-lg border-[1px] px-[20px] py-[32px] lg:h-[260px] lg:px-[40px] lg:py-[32px] 2xl:w-[442px]">
            <h3 className="text-base/[1.25rem] font-semibold md:text-[1.125rem]/[1.35rem] lg:w-[75%] xl:text-[1.5rem]/[1.75rem]">
                {title}{" "}
            </h3>
            <p className="text-second-110 py-[16px] text-sm/[1.35rem] font-normal sm:py-[18px] lg:py-[24px] lg:text-base/[1.5rem]">
                {description}
            </p>
            <Button variant="normal" text="See more" />
        </div>
    );
}
