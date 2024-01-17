// import { Row, Col, Form } from "react-bootstrap";
// import { useState } from "react";

// export default function Abholung(plz) {

//     const [form, setForm] = useState({
//         postleitzahl: plz,
//         vorname: null,
//         nachname: null,
//         strasse: null,
//         hausnummer: null,
//         email: null,
//         nachricht: null,
//     });
//     return (
//         <>
//                 <h1>Registriere deine Abholung</h1>
//         <label>
//       First name:
//       <input
//         value={form.vorname}
//         onChange={(e) => {
//           setForm({
//             ...form,
//             vorname: e.target.value,
//           });
//         }}
//       />
//     </label>
//     <label>
//       Last name:
//       <input
//         value={form.nachname}
//         onChange={(e) => {
//           setForm({
//             ...form,
//             nachname: e.target.value,
//           });
//         }}
//       />
//     </label>
//     <label>
//       Email:
//       <input
//         value={form.email}
//         onChange={(e) => {
//           setForm({
//             ...form,
//             email: e.target.value,
//           });
//         }}
//       />
//     </label>
//     <p>
//       {form.plz} {form.vorname} {form.nachname} {form.email}
//     </p>
//     </>
//     );
// }







// import Abholung from "./Abholung";
// import Abgabe from "./Abgabe";
// import { Row, Col, FormCheck, Form, FormLabel, FormGroup } from "react-bootstrap";
// import { React, useState, useReducer} from "react";


// const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.name]: event.value
//     }
//    }

// export default function Bestatigung(plzRe, umkreis) {
//     const [formData, setFormData] = useReducer(formReducer, {});
//     const [submitting, setSubmitting] = useState(false);
//     const handleChange = event => {
//     const isCheckbox = event.target.type === 'checkbox';
//     setFormData({
//       name: event.target.name,
//       value: isCheckbox ? event.target.checked : event.target.value,
//     })
//     } 
//     return ();}