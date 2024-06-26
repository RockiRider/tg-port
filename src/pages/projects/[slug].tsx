import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import CustomLink from "@/components/CustomLink";
import MainLayout from "@/components/layouts/MainLayout";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import TestComponent from "@/components/mdx/TestComponent";
import { Callout } from "@/components/mdx/Callout";
import AccordionMdx from "@/components/mdx/AccordionMdx";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope here
//TODO: Test moving this to a separate file
const components = {
  a: CustomLink,
  Callout: Callout,
  Accordion: AccordionMdx,
  MyTest: TestComponent,
  Head,
};

type ProjectPageProps = {
  source: MDXRemoteSerializeResult;
  title: string;
};

export default function ProjectPage({ source, title }: ProjectPageProps) {
  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header> */}
      <main className="max-w-3xl mx-auto">
        <div className="post-header">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-200 md:text-3xl ">
            {title}
          </h1>
          {/* {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )} */}
        </div>
        <article className="prose prose-img:rounded-xl prose-headings:text-white prose-a:text-blue-600 mt-12 text-slate-400">
          <MDXRemote {...source} components={components} />
        </article>
      </main>
    </MainLayout>
  );
}

type StaticPropsProps = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: StaticPropsProps) => {
  const { slug } = params;
  await dbConnect();
  const newProject = await Project.findOne({
    slug: slug,
  });

  const { content } = matter(newProject.mdxContent);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    // scope: data,
  });

  return {
    props: {
      source: mdxSource,
      title: newProject.title,
    },
  };
};

export const getStaticPaths = async () => {
  await dbConnect();
  const allProjects = await Project.find();

  // Map the path into the static paths object required by Next.js
  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
