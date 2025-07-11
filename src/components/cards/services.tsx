import Button from "../button";

type ServiceCardProps = {
    title: string;
    description: string;
};

export function ServiceCard(props: ServiceCardProps) {
    const { title, description } = props;
    return (
        <div className="border-second-70 rounded-lg border-[1px] px-[20px] py-[32px] lg:h-[260px] lg:px-[40px] lg:py-[32px] 2xl:w-[442px]">
            <h3 className="lg:w-[75%]">{title} </h3>
            <p className="text-second-110 py-[16px] text-sm/[1.35rem] font-normal sm:py-[18px] lg:py-[24px] lg:text-base/[1.5rem]">
                {description}
            </p>
            <Button variant="normal" text="See more" />
        </div>
    );
}
