import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

export default function Abgabe({ plzIn }) {

    const [form, setForm] = useState({
        postleitzahl: plzIn,
        vorname: '',
        nachname: '',
        strasse: '',
        hausnummer: 0,
        email: '',
        nachricht: '',
    });
    return (
        <>
            <h4>Welche Kleider möchtest du an der Geschäftstelle abgeben?</h4>
            <Row className="gap-3">
                <Col xs={3}>
                    <label>
                        First name: &nbsp;
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
                </Col>
                <Col xs={3}>
                    <label>
                        Last name: &nbsp;
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
                </Col>
                <Col xs={3}>
                    <label>
                        Email: &nbsp;
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
                </Col>
            </Row>

            <p>
                {form.plz} {form.vorname} {form.nachname} {form.email}
            </p>
        </>
    );



}