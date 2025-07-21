import { PortfolioSlugHero, PortfolioSlugMain } from "@/components";

export async function generateStaticParams() {
    const slugs = ["jackobian"];

    return slugs.map((slug) => ({ slug }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <main>
            <PortfolioSlugHero title={slug} />
            <PortfolioSlugMain />
        </main>
    );
}
