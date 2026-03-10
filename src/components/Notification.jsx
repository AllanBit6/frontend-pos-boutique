import {sileo, Toaster} from "sileo";
import { useEffect } from "react";

function Notification({type = "default", text}){

    useEffect(() => {

        if(type === "error"){
            sileo.error({
                title: "Algo salió mal",
                description: text,
            });
        }

        if(type === "success"){
            sileo.success({
                title: "Operación exitosa",
                description: text,
            });
        }

        if(type === "info"){
            sileo.warning({
                title: "Informacion",
                description: text,
            })
        }

    }, [type, text]);

    return(
        <Toaster position="top-right"/>
    );
}

export default Notification;