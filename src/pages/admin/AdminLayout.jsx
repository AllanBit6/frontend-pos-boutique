import "./AdminLayout.css";
import SectionHeader from "../components/SectionHeader";
import Searchbar from "../components/Searchbar";

function AdminLayout({
  title,
  children,
  actions
}) {
  return (
    <div className="admin-layout-wrapper">

      <SectionHeader>{title}</SectionHeader>

      <Searchbar />

      <div className="admin-layout-table">
        <div className="admin-tables">
          {children}
        </div>
      </div>

      <div className="admin-actions">
        {actions}
      </div>

    </div>
  );
}

export default AdminLayout;