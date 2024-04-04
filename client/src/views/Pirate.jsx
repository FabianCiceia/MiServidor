import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import EditStatus from "../components/EditStatus";

function Pirate({listaActualizada,useListaActualizada}) {
    const { id } = useParams(); 
    //para cargar a la  base de datos 
    const baseURL = `http://localhost:8000/api/pirates/`;
    const [pirate, setPirate] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${baseURL}${id}`).then((response) => {
        setPirate(response.data.pirate);
        useListaActualizada(false);
        });
        
    }, [listaActualizada]);
    if (!pirate) return null
    return (
        <div>
            <div className="container mb-3">
                <div className="row g-0">
                    <div className=" d-flex flex-column justify-content-center container col-md-6">
                        <img src={pirate.image} style={{ maxWidth: '210px'}} className="img-fluid rounded-start" alt="..."/>
                        <h1 className="container mt-3"  >"{pirate.catch}"</h1>
                    </div>
                    <div className=" container col-md-5 ">
                        <div className="card-body ">
                            <div className="d-flex flex-column justify-content-center">
                                <h3  className="card-title m-3">About</h3>
                                <p  className="card-text m-3">Treasures: {pirate.chests}</p>
                                <div className="d-flex">
                                    <p className="m-3">Peg Leg: {pirate.pegLeg?"Yes" : "No"}</p>
                                    < EditStatus  useListaActualizada={useListaActualizada} id={pirate._id} info="pegLeg" />
                                </div>
                                <div className="d-flex">
                                    <p className="m-3">Eye Patch:  {pirate.eyePatch?"Yes" : "No"}</p>
                                    <EditStatus  useListaActualizada={useListaActualizada} id={pirate._id} info="eyePatch" />
                                </div>
                                <div className="d-flex">
                                    <p className="m-3">Hook Hand:  {pirate.hookHand?"Yes" : "No"}</p>
                                    <EditStatus  useListaActualizada={useListaActualizada} id={pirate._id} info="hookHand" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pirate


const pirate = {
    "_id": "660e11dfd0d8bbdf8f8a7af0",
    "name": "Fabian Daniel Ciceia ",
    "image": "https://campoembarcaciones.com/wp-content/uploads/2020/10/barbanegra-1.jpg",
    "chests": 12,
    "catch": "Hola que hacer losadf adeees asddeee a a a3ww ",
    "position": "captain",
    "pegLeg": true,
    "eyePatch": false,
    "hookHand": true,
    "__v": 0
}