import "./AdminLayout.css";
import SectionHeader from "../../components/SectionHeader";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";
import React from "react";

function AdminLayout({
  title,
  children,
  actions,
  table=true
}) {

  const [search, setSearch] = useState("");

  return (
    <div className="admin-layout-wrapper">

      <SectionHeader>{title}</SectionHeader>

      {table && (
        <>
          <Searchbar onSearch={setSearch} />

          <div className="admin-actions">
            {actions}
          </div>

          <div className="admin-layout-table">
            <div className="admin-tables">
              {React.Children.map(children, child =>
                React.cloneElement(child, { search })
              )}
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default AdminLayout;