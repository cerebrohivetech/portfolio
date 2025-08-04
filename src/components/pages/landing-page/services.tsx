import { ServiceCard } from "../../cards";
import { Section } from "../../elements";

export default function Service() {
    return (
        <Section id="services" className="service-shadow flex flex-col justify-between text-white md:flex-row xl:gap-[60px]">
            <h2 className="mb-[22px] w-[298px] sm:mb-[28px]">Services</h2>
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
        </Section>
    );
}
