import ReportLayout from "./ReportesComponents/ReportLayout";
import BarGraph from "./ReportesComponents/Charts/BarGraph";
import RadialGraph from "./ReportesComponents/Charts/RadialGraph";
import HistoryGraph from "./ReportesComponents/Charts/HistoryGraph";

function Reportes(){
    return(
        <ReportLayout title="REPORTES">
            <div className="report-text">
                    <h3>Resumen</h3>
                    <p>
                        Las ventas aumentaron un 23% respecto al mes anterior.
                    </p>                 
            </div>
             <div className="reports-grid">
           
                <div className="report-card">
                    <BarGraph/>
                </div>

                <div className="report-card">
                    <RadialGraph/>
                </div>

                <div className="report-card">
                    <HistoryGraph/>
                </div>

            </div>
        </ReportLayout>
    )
}

export default Reportes;