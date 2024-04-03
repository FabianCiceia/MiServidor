import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router";
import InputForm from '../components/InputForm';

function Edit() {
    const { id } = useParams(); 
    //para cargar a la  base de datos 
    const baseURL = `http://localhost:8000/api/users/`;
    const [user, setProduct] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(`${baseURL}${id}`).then((response) => {
        setProduct(response.data.user);
        });
        
    }, []);
    if (!user) return null;
    function updatePost(pront) {
        axios
        .put(`${baseURL}update/${id}`, pront)
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: `${response.data.user.title} fue editado correctamente`,
            });
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: `${err.response.data.error.message}`,
            });
            setError(err.response.data.error.message);
        })
    }
    //Para el Formik
    const initialValues = {
        name: user.name,
        age: user.age
    };
    const onSubmit = (values,  { resetForm }) => {
        updatePost(values);
    };
    const validationSchema = Yup.object({
        title: Yup.string().required(),
        price: Yup.number().required().positive().integer(),
        description: Yup.string().required(),
    });
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >   
            <Form className="form">
                <h1>Add player</h1>
                <InputForm name="name" />
                <ErrorMessage  className="text-danger" name="player" component="div" />
                <InputForm name="age" />
                <ErrorMessage  className="text-danger" name="position" component="div" />
                <div>
                    <button className="" type="submit">Add</button>
                </div>
            </Form>
        </Formik>
    )
}

export default Edit
