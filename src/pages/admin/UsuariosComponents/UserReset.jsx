import "./UserForm.css";
import { resetearUsuarioPassword } from "../../../services/usuarioService";
import Button from "../../../components/Button";
import { sileo } from "sileo";


function UserReset({formData, closeModal}){
    console.log({formData});
    console.log({closeModal});

    const handleReset = async (e) => {
        e.preventDefault();

        const promise = resetearUsuarioPassword(formData.id_usuario);

        await sileo.promise(promise, {
            loading: {
            title: "Reseteando usuario",
            description: "Guardando información..."
            },
            success: {
            title: "Usuario reseteado",
            description: "El usuario se reseteo correctamente",
            duration: 1500
            },
            error: {
            title: "Error",
            description: "No se pudo resetear el usuario",
            duration: 1500
            }
        });

        closeModal();
    }

    return(
        <div>
            <form action="" onSubmit={handleReset} className="form-container">
                <input type="text" 
                    value={formData.id_usuario}
                    readOnly
                    />
                <input type="text"
                    value={formData.nombre}
                    readOnly/>
                <input type="text"
                    value={formData.apellido}
                    readOnly/>

                <Button type="caution">Resetear Contraseña</Button>
            </form>
        </div>
    )
}

export default UserReset;