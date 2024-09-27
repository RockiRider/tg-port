import { FullPageLoader } from "@/components/loaders/Loading";
import { DataTable } from "@/components/tables/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ProjectContentDisplay } from "@/types/project";
import { useRouter } from "next/router";
import ButtonLink from "@/components/ButtonLink";
import useGetPosts from "./useGetPosts";

const COLUMNS: ColumnDef<ProjectContentDisplay, string | number>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Date Created",
  },
  {
    header: "Date Posted",
  },
  {
    header: "Date Updated",
  },
  {
    header: "View",
    cell: (cell) => (
      <ButtonLink href={`/projects/${cell.row.original.slug}`}>View</ButtonLink>
    ),
  },
  {
    header: "Edit",
    cell: (cell) => {
      return (
        <ButtonLink href={`/admin/projects/edit/${cell.row.original.id}`}>
          Edit
        </ButtonLink>
      );
    },
  },
  // {
  //   header: "Delete",
  //   cell: (cell) => (
  //     <ButtonLink href={`/admin/projects/delete/${cell.row.getValue("_id")}`}>
  //       Delete
  //     </ButtonLink>
  //   ),
  // },
];

const MyBlogPosts = () => {
  const { allProjects, isLoading } = useGetPosts();
  const router = useRouter();

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-40 w-full mt-20">
      <DataTable columns={COLUMNS} data={allProjects} />
    </div>
  );
};

export default MyBlogPosts;