import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Insights on AI in contact centres, QA best practices, compliance, and product updates.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section dark className="pt-24 pb-12 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Insights &amp; Updates
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-video bg-gray-100" />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#3B82F6]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      · {post.readingTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
