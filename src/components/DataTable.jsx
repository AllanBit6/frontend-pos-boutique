import "./DataTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataTable({ columns, data, actions, iconMap }) {
  return (
    <table cellPadding="20" cellSpacing="0" className="data-table">
      <thead className="data-table-header">
        <tr className="data-table-header-column">
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
          {actions && <th>Acciones</th>}
        </tr>
      </thead>

      <tbody className="data-table-body">
        {data.map((item, idx) => (
          <tr key={idx} className="data-table-row">
            {columns.map((col, i) => (
              <td key={i}>{item[col]}</td>
            ))}
            {actions && (
              <td>
                {actions.map((action, i) => (
                  <button key={i} onClick={() => action.onClick(item)} className="table-action-button">
                    {action.icon && iconMap && iconMap[action.icon] ? (
                      <FontAwesomeIcon icon={iconMap[action.icon]} className="table-action-icon"/>
                    ) : (
                      action.label
                    )}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}