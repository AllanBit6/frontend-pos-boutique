import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./SidebarCommander.css";
import { useState } from "react";

function SidebarCommander({onClick}){

    //Para controlar el icono de hidden del navbar
    const [commanderIconState, setCommanderIconState] = useState(faAngleDoubleLeft);
 
    function handleClick(){
        onClick();

        if(commanderIconState == faAngleDoubleLeft){
            setCommanderIconState(faAngleDoubleRight);
        }else{
            setCommanderIconState(faAngleDoubleLeft);
        }  
    }  


    return(
        <div className="menu-commander">
            <button onClick={handleClick} className="menu-commander-icon-button">
                <FontAwesomeIcon icon={commanderIconState} className="menu-commander-icon"/>
            </button>
            
        </div>
    );
}

export default SidebarCommander;