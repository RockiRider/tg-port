import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

interface StackProps {
  direction?: "row" | "col";
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "between" | "around";
  className?: string;
  component?:
    | "div"
    | "section"
    | "article"
    | "aside"
    | "main"
    | "header"
    | "footer";
  children: ReactNode;
}

const Stack = ({
  direction = "col",
  gap = 2,
  justify,
  className = "",
  align,
  component = "div",
  children,
}: PropsWithChildren<StackProps>) => {
  const justifyClass = justify ? `justify-${justify}` : "";
  const alignClass = align ? `items-${align}` : "";
  const computedCname = cn(
    `flex flex-${direction} ${alignClass} ${justifyClass} w-full gap-${gap}`,
    className
  );

  if (component === "section") {
    return <section className={computedCname}>{children}</section>;
  }

  if (component === "article") {
    return <article className={computedCname}>{children}</article>;
  }

  if (component === "aside") {
    return <aside className={computedCname}>{children}</aside>;
  }

  if (component === "main") {
    return <main className={computedCname}>{children}</main>;
  }

  if (component === "header") {
    return <header className={computedCname}>{children}</header>;
  }

  if (component === "footer") {
    return <footer className={computedCname}>{children}</footer>;
  }

  return <div className={computedCname}>{children}</div>;
};

export default Stack;
