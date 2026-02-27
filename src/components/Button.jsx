import "./Button.css"

function Button({children, type = "default", onClick}){
    let buttonClassName = "";
    
    switch(type){
        
        case "default":
            buttonClassName = "btn default";
            break;
        case "caution":
            buttonClassName = "btn caution";
            break;

        case "accept":
            buttonClassName = "btn accept";
            break;
        
    }

    return (
        <div>
            <button className={buttonClassName} onClick={onClick}>{children}</button>
        </div>
    );
}

export default Button;