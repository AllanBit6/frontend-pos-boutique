import "./ButtonLight.css"

function ButtonLight({children, type = "default", onClick}){
    let buttonClassName = "";
    
    switch(type){
        
        case "default":
            buttonClassName = "btn-light default";
            break;
        case "caution":
            buttonClassName = "btn-light caution";
            break;

        case "accept":
            buttonClassName = "btn-light accept";
            break;
        
    }

    return (
        <div>
            <button className={buttonClassName} onClick={onClick}>{children}</button>
        </div>
    );
}

export default ButtonLight;