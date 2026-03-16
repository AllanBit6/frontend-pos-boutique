import "./AdminLayout.css";
import SectionHeader from "../../components/SectionHeader";
import Searchbar from "../../components/Searchbar";

function AdminLayout({
  title,
  children,
  actions,
  table=true
}) {
  return (
    <div className="admin-layout-wrapper">

      <SectionHeader>{title}</SectionHeader>

      {table == true && (
        <>
          <Searchbar />

          <div className="admin-actions">
            {actions}
          </div>

          <div className="admin-layout-table">
            <div className="admin-tables">
              {children}
            </div>
          </div>
        </>       
      )}
     
    </div>
  );
}

export default AdminLayout;