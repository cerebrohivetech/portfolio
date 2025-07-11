"use client";

import Button from "../button";
import { Section } from "../elements";
import Input, { TextArea } from "../inputs";
import ContactForm from "./form";

export default function Quote() {
    return (
        <Section className="flex flex-col bg-[url('/bg-image.svg')] md:flex-row md:gap-[47px] xl:gap-[67px]">
            <h2 className="mb-[32px] h-[56px] w-[194px] sm:w-full md:w-[220px] xl:h-[132px] xl:w-[292px]">
                Let&apos;s start building your big idea
            </h2>
            <ContactForm
                title="Get a qoute"
                onSubmit={() => console.log("hello world")}
            >
                <Input
                    label="Company Name"
                    name="companyName"
                    placeholder="Your Company name"
                    required={true}
                />
                <Input
                    label="Phone number"
                    name="PhoneNumber"
                    placeholder="+44-0000000000"
                    required={true}
                />
                <Input
                    label="Email"
                    name="email"
                    placeholder="example@emial.com"
                    required={false}
                />
                <Input
                    label="Project category"
                    name="projectCategory"
                    placeholder="Education"
                    required={true}
                />
                <TextArea
                    label="Brief description"
                    name="description"
                    placeholder="Tell us more about the project"
                />
                <Input
                    label="PRD"
                    name="prd"
                    placeholder="1000"
                    required={false}
                />

                <Button text="Get a qoute" variant="normal" type="submit" />
            </ContactForm>
        </Section>
    );
}
