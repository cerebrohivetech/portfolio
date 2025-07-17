import { PortfolioSlugHero, PortfolioSlugMain } from "@/components";

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
