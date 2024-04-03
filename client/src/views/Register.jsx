import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2'
import InputForm from '../components/InputForm';
import { useNavigate, Link} from "react-router-dom";

function Register() {
    const navigate = useNavigate(); 
    const baseURL ="http://localhost:8000/api/users/";
    function addData(pront) {
    axios
    .post(`${baseURL}new`, pront)
    .then(() => {
        Swal.fire({
            icon: "success",
            title: `fue cargado correctamente`,
        });
        // navigate("");
    })
    .catch(err => {
        Swal.fire({
            icon: "error",
            title: `Ha ocurrido un error`,
        });
        // console.log(err.response.data);
    })
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const onSubmit = (values,  { resetForm }) => {
    resetForm();
    navigate("/");
};
const validationSchema = Yup.object({
    firstName: Yup.string()
        .required(),
    lastName: Yup.string()
        .required(),
    email: Yup.string()
        .required()
        .email('Correo no valido'),
    password: Yup.string()
        .required()
        .oneOf([Yup.ref('confirmPassword'), null], 'Las contraseñas deben coincidir'),
    confirmPassword: Yup.string()
        .required(),
});
return (
    <div className='LoginForm'>
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        <Form className="form">
            <div className='row g-3 align-items-center'>
            <h1>Register</h1>
                <InputForm  name="firstName" />
                <InputForm name="lastName" />
                <InputForm name="email" />
                <InputForm name="password" />
                <InputForm name="confirmPassword" />
                <div>
                    <button className="" type="submit">Register</button>
                </div>
            </div>
        </Form>
    </Formik>
    </div>
)
}

export default Register
