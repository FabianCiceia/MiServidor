import React from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
function DeleteData({id, useListaActualizada,label}) {
    const baseURL = "http://localhost:8000/api/pirates/";
    const delet = () =>{
        Swal.fire({
            title: "Deseas eliminar ?",
            showDenyButton: true,
            showCancelButton: false,
            icon: "warning",
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`,
            confirmButtonColor: "#C6313A",
            denyButtonColor: "#7066E0",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${baseURL}delete/${id}`)
                .then((response) => {
                    if(response.data.result.deletedCount){
                        Swal.fire("Fue eliminado", "", "success");
                        useListaActualizada(true);
                    }else{
                        Swal.fire("No pudo ser eliminado", "", "error");
                    }
                });
            
            }
        });
    }
    return (
        <button  className="btn btn-danger mx-3" onClick={()=>delet()}>{label}</button>
    )
}

export default DeleteData
