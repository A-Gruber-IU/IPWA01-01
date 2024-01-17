import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

export default function Abholung({ plzIn, ortRe }) {
    let plz = plzIn;
    let ort = ortRe;

    const [form, setForm] = useState({
        vorname: '',
        nachname: '',
        strasse: '',
        email: '',
        nachricht: '',
    });

    return (
        <Container className="pe-5">
            <h4 className="my-4">Sag uns bitte wo wir deine Kleider abholen dürfen.</h4>
            <form>
                <Row>
                    <Col>
                        <label>
                            Vorname: &nbsp;<input className="mb-2" id="vorname" value={form.vorname} type="text" onChange={(e) => { setForm({ ...form, vorname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col>
                        <label>
                            Nachname: &nbsp;<input className="mb-2" id="nachname" value={form.nachname} type="text" onChange={(e) => { setForm({ ...form, nachname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col>
                        <label>
                            Email: &nbsp;<input className="mb-2" id="emailadresse" value={form.email} type="email" onChange={(e) => { setForm({ ...form, email: e.target.value, }); }} />
                        </label>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <label>
                            Postleitzahl: &nbsp;<input className="mb-2" id="postleitzahl" value={plz} type="number" readOnly
                            />
                        </label>
                    </Col>
                    <Col>
                        <label>
                            Ort: &nbsp;<input className="mb-2" id="ortsangabe" value={ort} type="text" readOnly />
                        </label>
                    </Col>
                    <Col>
                        <label>Straße, Nr.: &nbsp;<input className="mb-2" id="strasseNr" value={form.strasse} type="text" onChange={(e) => { setForm({ ...form, strasse: e.target.value, }); }} />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-auto">
                        <label>Art der Kleider? &nbsp;<select className="btn btn-outline-secondary" name="Themenauswahl" id="thema" required>
                                <option selected disabled value="">Bitte wähle ein Thema...</option>
                                <option value="Team">Ich will euer Team verstärken!</option>
                                <option value="Kleiderspende">Ich habe eine Frage zu meiner Kleiderspende.</option>
                                <option value="FrageCC">Ich habe eine Frage zu CaringCloak.</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href=<NeuesKleidungsstück art="Hose">>Hose</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Row>
                <p>
                    {form.plz} {form.vorname} {form.nachname} {form.email}
                </p>
            </form>
        </Container>

    );



}