"use client";

import { FullPageLoader } from "@/components/loaders/Loading";
import useGetProjects from "./useGetProjects";
import { DataTable } from "@/components/tables/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import ButtonLink from "@/components/ButtonLink";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { ArrowUpRightIcon } from "lucide-react";
import { ProjectDisplay } from "@/types/project";

const COLUMNS: ColumnDef<ProjectDisplay, string | number>[] = [
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
    cell: (cell) => {
      return (
        <ButtonLink href={`/projects/${cell.row.original.slug}`}>
          View
        </ButtonLink>
      );
    },
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

const MyProjects = () => {
  const { allProjects, isLoading } = useGetProjects();

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-40 w-full mt-20">
      <DataTable columns={COLUMNS} data={allProjects} />
    </div>
  );
};

export default MyProjects;
