import { BlogDetail, BlogSlugHero } from "@/components";

export async function generateStaticParams() {
    const slugs = ["blog1"];

    return slugs.map((slug) => ({ slug }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    console.log(slug);
    return (
        <main>
            <BlogSlugHero />
            <BlogDetail />
        </main>
    );
}
