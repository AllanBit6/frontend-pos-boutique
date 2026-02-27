import "./Button.css"

function Button({children, type = "default"}){
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
            <button className={buttonClassName}>{children}</button>
        </div>
    );
}

export default Button;