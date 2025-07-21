import { BlogDetail, BlogSlugHero } from "@/components";

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
