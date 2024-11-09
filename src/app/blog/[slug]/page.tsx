import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type HydratedDocument } from "mongoose";
import { type ProjectDisplay } from "@/types/project";
import ProjectArticle from "@/features/Public/Projects/individual/ProjectArticle";
import BlogPost from "@/models/BlogPost";
import { PublishedBlogPost } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import BlogArticle from "@/features/Public/Blog/BlogArticle";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  await dbConnect();
  const allPosts = await BlogPost.find<HydratedDocument<PublishedBlogPost>>({
    status: "PUBLISHED",
  });

  return allPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
}

async function getBlogPost(slug: string) {

  try {
    await dbConnect();

    const parsedSlug = serverParamSchema.parse(slug);

    const foundPost = await BlogPost.findOne<HydratedDocument<PublishedBlogPost>>({
      slug: parsedSlug,
    });
    if (!foundPost) {
      return null;
    }
    const post = foundPost.toJSON();
    return post;
  } catch (err) {
    return null;
  }  
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const currentPost = await getBlogPost(slug);
  if (!currentPost) {
    return <>Project not found</>;
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <BlogArticle post={currentPost} mdxContent={<CustomMDX source={currentPost.mdxContent} />} />
    </Suspense>
  );
}
