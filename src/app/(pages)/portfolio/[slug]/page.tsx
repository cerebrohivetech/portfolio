import { Section } from "@/components/elements";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <Section>
            <h1>{slug} </h1>
        </Section>
    );
}
