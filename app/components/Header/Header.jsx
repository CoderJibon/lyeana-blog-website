import Image from "next/image.js";
import logo from "@/public/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import LoginButton from "../LoginButton/LoginButton.jsx";
function Header() {
  return (
    <nav className=" flex justify-between items-center border-b px-7 py-3">
      <Image className="h-10 w-[auto]" src={logo} alt="lyeana logo" />
      <ul className="flex gap-6 items-center">
        <li className="flex gap-2 items-center font-lg ont-semibold">
          <IoHomeOutline />
          home
        </li>
        <li className="flex gap-2 items-center font-lg font-semibold">
          <CiBoxList />
          Blog
        </li>
        <li className="flex gap-2 items-center font-lg font-semibold">
          <FiMessageCircle />
          Contact Us
        </li>
      </ul>
      <LoginButton />
    </nav>
  );
}

export default Header;
