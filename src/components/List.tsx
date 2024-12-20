import React from "react";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";

interface ListItem {
  id: string;
  decorative?: React.ReactNode;
  component: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map(({ id, decorative = "•", component }) => (
        <Stack
          direction="row"
          gap={4}
          component="li"
          key={id}
          justify="start"
          className="py-1"
        >
          {typeof decorative === "string" ? (
            <Typography>{decorative}</Typography>
          ) : (
            decorative
          )}
          {component}
        </Stack>
      ))}
    </ul>
  );
};

export default List;
