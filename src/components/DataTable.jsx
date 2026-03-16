import "./DataTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataTable({ columns, data, actions, iconMap }) {
  return (
    <table cellPadding="20" cellSpacing="0" className="data-table">
      <thead className="data-table-header">
        <tr className="data-table-header-column">
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          {actions && <th>Acciones</th>}
        </tr>
      </thead>

      <tbody className="data-table-body">
        {data.map((item) => (
          <tr key={item.id ?? JSON.stringify(item)} className="data-table-row">
            {columns.map((col) => (
              <td key={col.key}>{item[col.key]}</td>
            ))}

            {actions && (
              <td>
                {actions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => action.onClick(item)}
                    className="table-action-button"
                  >
                    {action.icon && iconMap && iconMap[action.icon] ? (
                      <FontAwesomeIcon
                        icon={iconMap[action.icon]}
                        className="table-action-icon"
                      />
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