"use client";

import Button from "../button";
import { Section } from "../elements";
import Input, { TextArea } from "../inputs";
import ContactForm from "./form";

export default function ContactPageForm() {
    return (
        <Section className="flex flex-col bg-[url('/bg-image.svg')] justify-between md:flex-row md:gap-[47px] xl:gap-[67px]">
            <h2 className="mb-[32px] h-[56px] w-[194px] sm:w-full md:w-[220px] xl:h-[132px] xl:w-[292px]">
                Contact us
            </h2>
            <ContactForm
                title="Send us a message"
                onSubmit={() => console.log("hello world")}
            >
                <Input
                    label="email"
                    name="email"
                    placeholder="example@email.com"
                    required={true}
                />
                <TextArea
                    label="Message"
                    name="message"
                    placeholder="Tell us more about the project"
                />

                <Button text="Send a message" variant="normal" type="submit" />
            </ContactForm>
        </Section>
    );
}
