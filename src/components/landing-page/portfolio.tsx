import { Brands } from "../cards";
import Product from "../cards/product";
import CaseImage from "@/assets/images/project-display.png";

export default function Portfolio() {
    return (
        <section className="bg-[url('/bg-image.svg')] px-[20px] py-[56px] text-white shadow-xl shadow-[#10182840] lg:px-[70px] lg:py-[70px] xl:px-[100px] xl:py-[88px]">
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
        </section>
    );
}
