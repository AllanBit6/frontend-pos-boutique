import "./DataTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataTable({ columns, data, actions, iconMap, search}) {

  




  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <table cellPadding="20" cellSpacing="0" className="data-table">
        <thead className="data-table-header">
          <tr className="data-table-header-column">
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
            {actions && <th>Acciones</th>}
          </tr>
        </thead>

        <tbody className="data-table-body">
          {filteredData.map(item => (
            <tr key={item.id} className="data-table-row">
              {columns.map(col => (
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
                      {action.icon && iconMap?.[action.icon] ? (
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
    </>
  );
}