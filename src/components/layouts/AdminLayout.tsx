import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";
import BackgroundBeam from "./BackgroundBeam";

interface MainLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  {
    text: "Projects",
    href: "/admin/projects",
    num: 0,
  },
  {
    text: "Blog",
    href: "/admin/blog",
    num: 1,
  },
  {
    text: "Media",
    href: "/admin/media",
    num: 2,
  },
  {
    text: "Logout",
    href: "/",
    num: 3,
  },
];

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav navItems={NAV_ITEMS} />
      <BackgroundBeam />
      {children}
    </>
  );
};

export default AdminLayout;
