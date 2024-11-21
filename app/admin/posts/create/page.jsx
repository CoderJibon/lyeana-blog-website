"use client";

export default function createBlog() {
  return (
    <main className="w-full p-6 flex flex-col gap-3">
      <div className="flex gap-5 items-center">
        <div className="flex">
          <h3 className="text-white bg-orange-500 px-4 py-2 rounded-full text-xs font-bold">
            Update
          </h3>
        </div>
        <div className="flex">
          <h3 className="text-white bg-green-500 px-4 py-2 rounded-full text-xs font-bold">
            Create
          </h3>
        </div>
        <h1 className="font-bold">Category | Form</h1>
      </div>
      <section className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //console.log
          }}
          className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-500">*</span>{" "}
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Name"
              type="text"
              onChange={(e) => {}}
              value={""}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Slug <span className="text-red-500">*</span>{" "}
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="text"
              onChange={(e) => {}}
              value={""}
              required
            />
          </div>

          <div>
            <img className="h-40" src={""} alt="" />
          </div>

          <div>
            <img className="h-40" src={""} alt="" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">Image </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <p className="text-red-500 text-sm">error</p>

          <button
            type="submit"
            className="bg-blue-500 rounded-full px-4 py-2 text-white"
          ></button>

          <button className="bg-red-500 rounded-full px-4 py-2 text-white"></button>

          <h3 className="text-green-500 font-bold text-center">Successfully</h3>
        </form>
      </section>
    </main>
  );
}
