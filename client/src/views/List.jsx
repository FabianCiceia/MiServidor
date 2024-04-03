import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DeleteData from "../components/DeleteData";

function List() {
    const url = "http://localhost:8000/api/users/";
    const [ listaActualizada,useListaActualizada] = useState(true);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data)
                setData(response.data.users);
                useListaActualizada(false)
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
        <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        {/* <th scope="col">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={index}>
                            
                            <th><Link to={`/edit/${data._id}`}>{data.name}</Link></th>
                            <th>{data.age}</th>
                            <th><DeleteData useListaActualizada={useListaActualizada } id={data._id}/></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List
