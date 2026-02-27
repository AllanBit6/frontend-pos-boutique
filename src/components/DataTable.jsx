import "./DataTable.css"

export default function DataTable({ columns, data, actions }) {
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
                  <button key={i} onClick={() => action.onClick(item)}>
                    {action.label}
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