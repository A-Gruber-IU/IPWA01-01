import { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";


export default function App() {
  const [form, setForm] = useState({
    plz: null,
    abholung: null,
    vorname: null,
    nachname: null,
    adresse: null,
    stadt: null,
    nachricht: null,
  });

  function PlzCheck() {
    if (form.plz > 83999) {
      return (
        <Card className="bg-body-secondary">
          <Card.Header as="h5">Keine Abholung möglich!</Card.Header>
          <Card.Body>
            <Card.Text>Leider liegt der angegebene Ort außerhalb des Einzugsgebiets für Abholungen. Du kannst die Kleider gerne eigenständig bei der Geschäftstelle abgeben und dich dazu hier registrieren. An der Geschäftsstelle liegt auch ein Tablet aus, mit dem du das erledigen kannst.</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }

  return (
    <>
      <Row>
        <h1 className="text-center my-4">Registriere deine Kleiderspende!</h1>
      </Row>
      <Row className="my-4">
        <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1} className="mx-3 my-3">
          <Form.Label className="mx-1">Postleitzahl: </Form.Label>
          <input
            value={form.plz}
            id="plzEingabe"
            type="number"
            required
            placeholder="12345"
            onChange={(e) => {
              setForm({
                ...form,
                plz: e.target.value,
              })
            }}
          />
        </Col>
        <Col className="mx-4 my-auto">
          <PlzCheck />
        </Col>
      </Row>
      <label>
        First name:
        <input
          value={form.vorname}
          onChange={(e) => {
            setForm({
              ...form,
              vorname: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.nachname}
          onChange={(e) => {
            setForm({
              ...form,
              nachname: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.plz} {form.vorname} {form.nachname} {form.email}
      </p>
    </>
  );
}

// function plzCheck({ plzC }) {
//   let abholung = false;
//   let plzRe = "";
//   if (plzC > 99999) {
//     plzRe = "Bitte gib eine gültige Postleitzahl an.";
//     return(
//       <h3>{plzRe}</h3>
//     );
//   }
//   else if (plzC < 1) {
//     plzRe = "Bitte gib eine gültige Postleitzahl an.";
//     return(
//       <h3>{plzRe}</h3>
//     );
//   }
//   else if (plzC > 83999) {
//     plzRe = "Leider ist am angegeben Ort keine Lieferung möglich.";
//     return(
//       <h3>{plzRe}</h3>
//     );
//   }
//   else if (plzC < 83000) {
//     plzRe = "Leider ist am angegeben Ort keine Lieferung möglich.";
//     return(
//       <h3>{plzRe}</h3>
//     );
//   }
//   else if ((plzC > 82999)&&(plz < 84000)) {
//     abholung = true;
//     plzRe = "Bitte wähle, ob wir die Kleider abholen sollen oder die sie selbst abgeben willst.";
//     return(
//       <h3>{plzRe}</h3>
//     );
//   }
// }

// import { Row, Col, Container, FormCheck, Form, FormLabel, FormGroup } from "react-bootstrap";
// import { React, useState, useReducer} from "react";

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.name]: event.value
//   }
//  }

// export default function App() {
//   let isChecked;
//   let plz = 0;
//   let ausserReichweite = true;
//   const [formData, setFormData] = useReducer(formReducer, {});
//   const [submitting, setSubmitting] = useState(false);
//   const handleChange = event => {
//     const isCheckbox = event.target.type === 'checkbox';
//     setFormData({
//       name: event.target.name,
//       value: isCheckbox ? event.target.checked : event.target.value,
//     })
//   }
//   const handleChangePLZ = event => {
//     setFormData({
//       name: event.target.name,
//       value: event.target.value,
//     })
//     plzPruefen(plz);
//   }
//   return (
//     <Container className="ms-3 mt-3">
//       <Row>
//         <h1 className="text-center my-4">Registriere deine Kleiderspende!</h1>
//       </Row>
//       <Form>
//         <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>
//           <Form.Group
//             className="mb-3"
//             controlId="postleitzahlEingabe"
//             value={plz}
//             onChange={handleChangePLZ}
//           >
//             <Form.Label>Postleitzahl</Form.Label>
//             <Form.Control type="number" placeholder="12345" />
//           </Form.Group>
//         </Col>
//         <Col>
//           <FormGroup>
//             <FormLabel>
//               <strong>Art der Abgabe</strong>
//             </FormLabel>
//             <FormCheck
//               checked={isChecked}
//               onChange={handleChange}
//               name="Logistik"
//               label="Abgabe an Geschäftstelle"
//               id="Abgabe"
//               type="radio"
//             />
//             <FormCheck
//               disabled={ausserReichweite}
//               checked={isChecked}
//               onChange={handleChange}
//               name="Logistik"
//               label="Abholung"
//               id="Abholung"
//               type="radio"
//             />
//           </FormGroup>
//         </Col>
//       </Form>
//     </Container>
//   );
// }

// function plzPruefen(plz) {
//   // Auswahlmöglichkeit bei PLZ mit 83***, also im Einzugsgebiet
//   if (83000 <= plz <= 83999) {
//     return (
//       <Row>
//         <h3 className="text-center my-4">
//           Wunderbar, der angegebene Ort befindet sich im Einzugsgebiet!
//         </h3>
//       </Row>
//     );
//   } else if (0 < plz <= 99999) {
//   // Auswahlmöglichkeit bei PLZ außerhalb 83***, also nicht im Einzugsgebiet
//     return (
//       <Row>
//         <h3 className="text-center my-4">
//           Leider befindet sich der angegeben Ort außerhalb des Einzugsgebiet für
//           die Abholung. Du kannst die Kleider hier zur direkten Abgabe an der
//           Geschäftstelle registrieren.
//         </h3>
//       </Row>
//     );
//   } else if (plz <= 0 || plz > 99999) {
//   // Auswahlmöglichkeit bei ungültiger PLZ
//     return (
//       <Row>
//         <h3 className="text-center my-4">
//           Bitte gib eine gültige Postleitzahl an.
//         </h3>
//       </Row>
//     );
//   }
// }
