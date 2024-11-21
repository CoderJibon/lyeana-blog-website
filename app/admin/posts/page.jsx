import PostListView from "@/app/components/PostListView/PostListView.jsx";

import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
export default function Posts() {
  return (
    <main className="p-6 w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Posts</h1>
        <Link href={"/admin/posts/create"}>
          <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
            <CiCirclePlus />
            Add
          </button>
        </Link>
      </div>
      <PostListView />
    </main>
  );
}
