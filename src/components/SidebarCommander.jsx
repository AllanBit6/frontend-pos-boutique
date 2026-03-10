import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SidebarCommander.css";

function SidebarCommander({onClick}){
    return(
        <div className="menu-commander">
            <button onClick={onClick} className="menu-commander-icon-button">
                <FontAwesomeIcon icon={faBars} className="menu-commander-icon"/>
            </button>
            
        </div>
    );
}

export default SidebarCommander;