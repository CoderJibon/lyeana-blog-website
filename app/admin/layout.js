import Sidebar from "../components/Sidebar/Sidebar.jsx";

function AdminLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </section>
  );
}

export default AdminLayout;
