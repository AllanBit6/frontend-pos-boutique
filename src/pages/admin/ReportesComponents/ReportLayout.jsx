import "../AdminLayout.css";
import SectionHeader from "../../../components/SectionHeader";


function ReportLayout({title, children}){
    return(
        <div className="admin-layout-wrapper">

        <SectionHeader>{title}</SectionHeader>

        <div className="reports-container">
            {
                children
            }
        </div>
     
        </div>


    )
}

export default ReportLayout;