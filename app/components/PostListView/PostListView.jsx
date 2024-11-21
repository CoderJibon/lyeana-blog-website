import Link from "next/link";

export default function PostListView() {
  return (
    <section>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-50">Sr.</th>
            <th className="border px-4 py-2 bg-blue-50">Image</th>
            <th className="border px-4 py-2 bg-blue-50">Title</th>
            <th className="border px-4 py-2 bg-blue-50">Slug</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">0</td>
            <td className="border px-4 py-2">
              <img className="h-10" src="" alt="" />
            </td>
            <td className="border px-4 py-2">title</td>
            <td className="border px-4 py-2">slug</td>
            <td className="border px-4 py-2">
              <Link href={`/admin/posts/form?id=1`}>
                <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                  Action
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
