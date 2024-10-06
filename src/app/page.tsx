import Head from "next/head";
import Hero from "@/features/Public/Home/Hero";
import Showcase from "@/features/Public/Projects/Showcase";
import AboutMe from "@/features/Public/Home/AboutMe";
import RecentPosts from "@/features/Public/Blog/RecentPosts";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import BlogPost from "@/models/BlogPost";
import { ProjectContentDisplay } from "@/types/project";
import { PublishedBlogPost } from "@/types/blogpost";
import { HydratedDocument } from "mongoose";
import { Metadata } from "next";

export const revalidate = 60;

async function fetchFeaturedProjects() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectContentDisplay>>({
    featured: true,
  }).limit(2);
  return projects.map((project) => project.toJSON());
}

async function fetchRecentPosts() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPost>>({
    published: true,
  })
    .limit(2)
    .populate("tags");
  return posts.map((post) => post.toJSON());
}

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const featuredProjects = await fetchFeaturedProjects();
  const recentPosts = await fetchRecentPosts();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Showcase featuredProjects={featuredProjects} />
      <AboutMe />
      <RecentPosts posts={recentPosts} />
    </>
  );
}