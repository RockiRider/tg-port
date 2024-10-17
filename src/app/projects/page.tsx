import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import FullProjectCards from "@/features/Public/Projects/FullProjectCards";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { ProjectDisplay } from "@/types/project";
import { HydratedDocument } from "mongoose";
import { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Projects",
};

async function fetchAllProjects() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectDisplay>>();
  return projects.map((project) => project.toJSON());
}

export default async function AllProjectsPage() {
  const allProjects = await fetchAllProjects();

  return (
    <Stack gap={4}>
      <Typography variant="h1">All Projects</Typography>
      <FullProjectCards projects={allProjects} />
    </Stack>
  );
}
