import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <Section dark className="pt-24 pb-12">
        <Container className="max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            {post.author} ·{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime}
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-gray prose-lg max-w-none prose-headings:tracking-tight prose-a:text-[#3B82F6]">
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section gray>
          <Container>
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Related Posts
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Badge variant="secondary" className="mb-2">
                    {r.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#3B82F6]">
                    {r.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
