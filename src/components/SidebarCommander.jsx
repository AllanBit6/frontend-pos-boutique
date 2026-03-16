import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";

import "./SidebarCommander.css";
import { useState } from "react";

function SidebarCommander({onClick}){

    //Para controlar el icono de hidden del navbar
    const [commanderIconState, setCommanderIconState] = useState(faBars);
    const [menuCommanderClass, setMenuCommanderClass] = useState("menu-commander");

    function handleClick(){
        onClick();

        if(commanderIconState == faAngleDoubleLeft){
            setMenuCommanderClass("menu-commander collapsed");
            setCommanderIconState(faBars);
            
            
        }else{
            setCommanderIconState(faAngleDoubleLeft);   
            setMenuCommanderClass("menu-commander");
        }  
    }  


    return(
        <div className={menuCommanderClass}>
            <button onClick={handleClick} className="menu-commander-icon-button">
                <FontAwesomeIcon icon={commanderIconState} className="menu-commander-icon"/>
            </button>
            
        </div>
    );
}

export default SidebarCommander;