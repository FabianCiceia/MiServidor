import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2'
import InputForm from '../components/InputForm';
import { useNavigate, Link} from "react-router-dom";

function Add() {
  const navigate = useNavigate(); 
  const baseURL ="http://localhost:8000/api/pirates/";
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
      name: '',
      image: '',
      chests: '',
      position: 'captain',
      pegLeg: true,
      eyePatch: true,
      hookHand: true,
  };
  const onSubmit = (values,  { resetForm }) => {
    addData(values);
    resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string().required(),
  image: Yup.string(),
  chests: Yup.number().required().min(0),
  position: Yup.string().required(),
  pegLeg: Yup.bool().required(),
  eyePatch: Yup.bool().required(),
  hookHand: Yup.bool().required(),
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
              <h1>Add player</h1>
                <InputForm  name="name" />
                <InputForm name="image" />
                <InputForm type="number" name="chests" />
                <InputForm name="catch" />
                <Field as="select"  className="col-form-label" type="text" id="position" name="position">
                  <option value="captain">Captain</option>
                  <option value="firstMate">First Mate</option>
                  <option value="quarterMaster">Quarter Master</option>
                  <option value="boatswain">Boatswain</option>
                  <option value="powderMonkey">Powder Monkey</option>
                </Field>
                <div>
                  <Field type="checkbox" id="pegLeg"name="pegLeg"/>
                  <label>Peg Leg</label>
                </div>
                <div>
                  <Field type="checkbox" id="eyePatch"name="eyePatch"/>
                  <label>Eye Patch</label>
                </div>
                <div>
                  <Field type="checkbox" id="hookHand"name="hookHand"/>
                  <label>Hook Hand</label>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
          </Form>
      </Formik>
    </div>
  )
}

export default Add
