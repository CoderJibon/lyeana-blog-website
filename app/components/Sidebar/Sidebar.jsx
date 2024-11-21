import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { LuLayoutList } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Sidebar() {
  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <RxDashboard />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LuLayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <IoLayersOutline />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <FaRegUser />,
    },
  ];
  return (
    <section className="w-[200px] border-r h-screen p-6">
      <ul className="w-full flex flex-col gap-6">
        {link.map((item) => {
          return (
            <Link href={item.link}>
              <li className="flex gap-3 font-bold items-center bg-blue-50 rounded-full px-5 py-2">
                {item.icon}
                <span className="">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
