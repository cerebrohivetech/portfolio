import Image from "next/image";
type ButtonProp = {
    text: string;
    variant: "standard" | "normal";
    icon?: string;
};

export default function Button(props: ButtonProp) {
    const { text, variant, icon } = props;

    return (
        <button
            type="button"
            className={`bg-first-60 ${variant === "standard" && "btn-shadow border-first-40 border-[1px]"} rounded-sm px-[14px] py-[10px] text-sm font-semibold text-white`}
        >
            {icon && <Image src={icon} alt="" />}
            {text}
        </button>
    );
}
