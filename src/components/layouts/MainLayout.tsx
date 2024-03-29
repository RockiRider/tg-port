import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  {
    text: "Home",
    href: "/",
    num: 0,
  },
  {
    text: "Projects",
    href: "/blog",
    num: 1,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 2,
  },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav navItems={NAV_ITEMS} />
      {children}
    </>
  );
};

export default MainLayout;
