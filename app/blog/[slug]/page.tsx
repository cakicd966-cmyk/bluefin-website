import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/app/blog/posts-data";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `https://bluefinnairandelec.netlify.app/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)
    .concat(
      posts
        .filter((p) => p.slug !== post.slug && p.category !== post.category)
        .slice(0, Math.max(0, 2 - posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2).length))
    )
    .slice(0, 2);

  return <BlogPostClient post={post} related={related} />;
}
