import { ReactNode } from "react";

type FormProp = {
    children: ReactNode;
    title: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContactForm(props: FormProp) {
    const { children, title, onSubmit } = props;

    return (
        <div className="relative md:w-[600px] lg:w-[770px] xl:left-[40px] xl:w-[881px] 2xl:left-[80px]">
            <p className="text-second-110 mb-[24px] text-base/normal font-normal xl:mb-10 xl:h-[30px] xl:text-[1.125rem]/[1.875rem]">
                {title}
            </p>

            <form
                action=""
                className="bg-second-20 border-first-110 rounded-xl border-1 px-[16px] py-[24px] xl:px-[24px] xl:py-[32px]"
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </div>
    );
}
