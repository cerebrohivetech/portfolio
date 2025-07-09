import Image from "next/image";
import Link from "next/link";
type ButtonProp = {
    text: string;
    variant: "standard" | "normal";
    icon?: string;
    link?: string;
    type?: "submit" | "button";
};

export default function Button(props: ButtonProp) {
    const { text, variant, icon, link, type } = props;

    return link ? (
        <Link href={link}>
            <button
                type="button"
                className={`bg-first-60 flex items-center gap-1 ${variant === "standard" && "btn-shadow border-first-40 border-[1px]"} rounded-sm px-[14px] py-[10px] text-sm font-semibold text-white`}
            >
                {icon && <Image src={icon} alt="" />}
                {text}
            </button>
        </Link>
    ) : (
        <button
            type={type ? type : "button"}
            className={`bg-first-60 flex items-center gap-1 ${variant === "standard" && "btn-shadow border-first-40 border-[1px]"} rounded-sm px-[14px] py-[10px] text-sm font-semibold text-white`}
        >
            {icon && <Image src={icon} alt="" />}
            {text}
        </button>
    );
}
