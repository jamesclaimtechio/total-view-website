import type { Metadata } from "next";

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `https://total-view.co.uk${path}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — TotalView AI`,
      description,
      url,
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    alternates: {
      canonical: url,
    },
  };
}
