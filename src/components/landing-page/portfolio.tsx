import { Brands } from "../cards";
import Product from "../cards/product";
import CaseImage from "@/assets/images/project-display.png";
import { Section } from "../elements";

export default function Portfolio() {
    return (
        <Section className="bg-[url('/bg-image.svg')] text-white shadow-xl shadow-[#10182840]">
            <Brands />

            <div className="flex flex-col gap-[64px]">
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
                <Product
                    title="Product 1"
                    description="We are the perfect software and hardware technology outsourcing firm for "
                    images={[CaseImage, CaseImage]}
                />
            </div>
        </Section>
    );
}
