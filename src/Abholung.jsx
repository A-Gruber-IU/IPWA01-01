import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import NeuesTeil from "./NeuesTeil";

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
    const [kleiderArray, setKleiderArray] = useState([0]);


    function neuesKleiderstueck(event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite
        if (kleiderArray.length < 101) {
            setKleiderArray(kleiderArray => [...kleiderArray, kleiderArray.length]); // Aktuelle Länge des Arrays wird als Wert für neues Element hinzugefügt
        }
        else if (kleiderArray.length > 100) {
            alert('Du hast das Limit an Kleidungsstücken für die Abholung erreicht. Große Spenden, etwa bei Haushaltsauflösungen, werden gesondert behandelt. Setze dich dafür direkt mit uns in Verbindung.');
        }
    }
    function entferneKleidungsstueck(event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite
        if (kleiderArray.length > 1) {
            const lastElement = kleiderArray[kleiderArray.length - 1]; // Das letzte Element im Array
            setKleiderArray(kleiderArray => kleiderArray.filter(element => element !== lastElement)); // Behalte alle Elemente bei, die nicht dem letzten Element entsprechen
        }
    }

    return (
        <Container className="pe-5">
            <h4 className="my-4">Sag uns bitte wo wir deine Kleider abholen dürfen.</h4>
            <form>
                <Row>
                    <Col className="align-self-end">
                        <label>
                            Vorname: &nbsp;<input className="mb-2" id="vorname" value={form.vorname} required type="text" onChange={(e) => { setForm({ ...form, vorname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Nachname: &nbsp;<input className="mb-2" id="nachname" value={form.nachname} required type="text" onChange={(e) => { setForm({ ...form, nachname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Email: &nbsp;<input className="mb-2" id="emailadresse" value={form.email} type="email" required onChange={(e) => { setForm({ ...form, email: e.target.value, }); }} />
                        </label>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col className="align-self-end">
                        <label>
                            Postleitzahl: &nbsp;<input className="mb-2" id="postleitzahl" value={plz} type="number" readOnly />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Ort: &nbsp;<input className="mb-2" id="ortsangabe" value={ort} type="text" readOnly />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>Straße, Nr.: &nbsp;<input className="mb-2" id="strasseNr" value={form.strasse} type="text" required onChange={(e) => { setForm({ ...form, strasse: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="my-1 align-self-end">
                        <label>
                            Wo soll deine Spende hingehen? &nbsp; <select className="btn text-black bg-secondary-subtle" name="auswahlGebiet" id="auswahlGebiet" defaultValue={"nichts"} required>
                                <option disabled value="nichts">Bitte wähle ein Krisengebiet...</option>
                                <option value="Jemen">Jemen</option>
                                <option value="Lybien">Lybien</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Somalia">Somalia</option>
                                <option value="Syrien">Syrien</option>
                            </select>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <button className="btn btn-primary" onClick={neuesKleiderstueck}>+ Neues Kleidungsstück +</button>
                    <p>Registrierte Kleidungsstücke: &nbsp; {kleiderArray.length}</p>
                </Row>
                <div>
                    {kleiderArray.map(i => <NeuesTeil key={i} kleiderNr={i + 1} />)} {/* Rendere eine NeuesTeil-Komponente für jeden Wert in kleiderArray */}
                </div>
                <Row>
                    <button className="btn btn-danger" onClick={entferneKleidungsstueck}>- Letztes Kleidungsstück löschen -</button>
                </Row>
                <p>
                    {form.plz} {form.vorname} {form.nachname} {form.email}
                </p>
            </form>
        </Container>
    );
}