import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";

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
    text: "Logout",
    href: "/",
    num: 2,
  },
];

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav navItems={NAV_ITEMS} />
      <div className="bg-black">{children}</div>
    </>
  );
};

export default AdminLayout;
