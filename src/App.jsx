import { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import PlzCheck from "./PlzCheck"

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