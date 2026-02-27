import "./SectionHeader.css"

function SectionHeader({children}){
    return(
        <div className="section-header">
            <h2 className="section-title">{children}</h2>
        </div>

    )
}

export default SectionHeader;