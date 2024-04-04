import React from 'react';
import { Formik,  Form } from 'formik';
import * as Yup from 'yup';
import InputForm from './InputForm';
import { useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate(); 


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const onSubmit = (  ) => {
    navigate("/pirates");
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
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </div>
        </Form>
    </Formik>
    </div>
)
}

export default Register
