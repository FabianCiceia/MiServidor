import React from 'react';
import { Formik,  Form} from 'formik';
import * as Yup from 'yup';
import InputForm from './InputForm';
import { useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate(); 


const initialValues = {
    email: '',
    password: ''
};
const onSubmit = ( ) => {

    navigate("/pirates");
};
const validationSchema = Yup.object({
    password: Yup.string()
        .required(),
    email: Yup.string()
        .required()
        .email('Correo no valido'),
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
            <h1>Login</h1>
                <InputForm name="email" />
                <InputForm name="password" />
                <div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </div>
        </Form>
    </Formik>
    </div>
)
}

export default Login
