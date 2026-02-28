import "./SidebarOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faTableList,
  faFileLines,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  user: faUser,
  home: faHouse,
  tables: faTableList,
  reports: faFileLines,
  sales: faCartShopping
};



function SidebarOption({ children, type = "" }) {

  const selectedIcon = iconMap[type];

  return (
    <div className="sidebar-item-container">
      {selectedIcon && (
        <FontAwesomeIcon  icon={selectedIcon} className="sidebar-option-icon"/>
      )}
      <li className="sidebar-option">{children}</li>
    </div>
  );
}

export default SidebarOption;