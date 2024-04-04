import axios from "axios";
import React, { useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DeleteData from "../components/DeleteData";
function List({listaActualizada,useListaActualizada}) {
    const url = "http://localhost:8000/api/pirates/";
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                // console.log(response.data)
                setData(response.data.pirates);
                useListaActualizada(false);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
            
    }, [listaActualizada]);

    if(error){
        return <div>{error.message}</div>
    }
    if(isLoading){
        return (
            <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
            </table>
            <h1>Loading</h1>
        </div>
        )
    }
    return (
        <div className="container d-flex flex-column">
            <div className="d-flex flex-column" >
                {data.map((data, index) => (
                            <div className="p-2" key={index}>
                                <div className="container flex-wrap d-flex  align-items-center ">
                                    <div  className="p-1 align-self-stretch">
                                        <img style={{ height: '200px', width: '200px'}} src={data.image} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="p-1 align-self-stretch">
                                        <div className="card-body">
                                            <h1>{data.name}</h1>
                                            <Link className="btn btn-primary" to={`/pirates/${data._id}`}>View Pirate</Link>
                                            <DeleteData id={data._id} useListaActualizada={useListaActualizada} label="Walk the Plank" />
                                        </div>
                                        {/* <EditStatus listaActualizada={listaActualizada} useListaActualizada={useListaActualizada} info={"pegLeg"} label={"Peg Leg"} id={data._id}/> */}
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}

export default List
