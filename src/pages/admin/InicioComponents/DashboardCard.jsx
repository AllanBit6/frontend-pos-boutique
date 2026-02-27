import "./DashboardCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faHouse,
  faTableList,
  faFileLines,
  faFileInvoiceDollar
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  home: faHouse,
  user: faUserCheck,
  tables: faTableList,
  reports: faFileLines,
  sales: faFileInvoiceDollar
};

function DashboardCard({ children, icon, color = "default" }) {

  const selectedIcon = iconMap[icon];

  return (
    <div className={`dashboard-card ${color !== "default" ? `${color}-card` : ""}`}>
      
      {selectedIcon && (
        <FontAwesomeIcon
          icon={selectedIcon}
          className="card-icon"
        />
      )}

      <p className="card-title">{children}</p>

    </div>
  );
}

export default DashboardCard;