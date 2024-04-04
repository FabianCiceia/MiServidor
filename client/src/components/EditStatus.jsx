
import axios from "axios";
import Swal from 'sweetalert2'
import React, { useState } from "react";


function EditStatus({id , info, useListaActualizada}) {
    // const { id } = useParams(); 
    const baseURL = `http://localhost:8000/api/pirates/`;
    const [pirate, setPirate] = React.useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, useActualizar] = useState(true);
    React.useEffect(() => {
        axios.get(`${baseURL}${id}`).then((response) => {
        setPirate(response.data.pirate);
        setIsLoading(false);
        useActualizar(false);
        });
        
    }, [actualizar]);
    if(isLoading){
        return(
            <button className="btn btn-secondary">Loading</button>
        )
    }
    function updatePost(pront) {
        axios
        .put(`${baseURL}update/${id}`, pront)
        .then((response) => {
            if(response){
                Swal.fire({
                    icon: "success",
                    title: ` fue editado correctamente`,
                });
                useActualizar(true);
                useListaActualizada(true);
            }
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: `${err.response.data.error.message}`,
            });
            setError(err.response.data.error.message);
        })
    }
    const click = ({status, info})=>{
        let data = {};
        data[info] = status;
        updatePost(data);
    }

    return (
        <div>
            <button className={pirate[info]?"btn btn-danger" : "btn btn-primary"} onClick={() => click( {status:!pirate[info],info:info} )}>
            {
                pirate[info]?"No" : "Yes"
            }
            </button>
        </div>
    )
}

export default EditStatus
