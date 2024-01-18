import { useState } from "react";
import { Row, Col, Card, FormGroup, FormLabel } from "react-bootstrap";
import Abholung from "./Abholung";
import Abgabe from "./Abgabe";

export default function CheckPLZ({ plz, fehler, ort, handleBestaetigung }) {

    const [selectedValue, setSelectedValue,] = useState("abholungX");
    const handleRadioChange = (value) => { setSelectedValue(value); };

    if ((plz > 99999) || (String(plz).length < 5) || (plz < 1)) {
        return (
            <Col xs={10} className="mx-3 mb-3">
                <Card>
                    <Card.Body className="bg-light text-bg-light">
                        <Card.Text>Bitte gib deine Postleitzahl an, damit wir prüfen können, ob der Abholort im Einzugsgebiet liegt.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    else if ((String(plz).length == 5) && (fehler)) {
        return (
            <Col xs={10} className="mx-3 mb-3">
                <Card>
                    <Card.Body className="bg-light text-bg-light">
                        <Card.Text>Das scheint keine gültige Postleitzahl zu sein.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    else if ((plz > 83999) || (plz < 83000)) {
        return (
            <>
                <Row className="ms-2">
                    <p><strong>Ort: </strong>{ort}</p>
                </Row>
                <Col xs={10} className="mx-3 mb-3">
                    <Card>
                        <Card.Header as="h5" className="bg-primary text-bg-primary">Keine Abholung möglich!</Card.Header>
                        <Card.Body className="bg-light text-bg-light">
                            <Card.Text>Leider liegt der angegebene Ort außerhalb des Einzugsgebiets für Abholungen (Südosten Oberbayerns). Du kannst die Kleider aber gerne persönlich bei der Geschäftstelle abgeben.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Abgabe plz={plz} handleBestaetigung={handleBestaetigung} />
            </>
        );
    }
    else if ((plz > 82999) && (plz < 84000)) {
        return (
            <>
                <Row className="ms-2">
                    <p><strong>Ort: </strong>{ort}</p>
                </Row>
                <Col xs={10} className="mx-3 mb-3">
                    <Card>
                        <Card.Header as="h5" className="bg-success text-bg-success">Alles im grünen Bereich!</Card.Header>
                        <Card.Body className="bg-light text-bg-light">
                            <Card.Text>Der angegebene Ort liegt im Einzugsgebiet für Sammelaktion. Du hast die Wahl: entweder registrierst du deine Kleiderspende hier zur Abholung oder du gibst sie an der Geschäftstelle ab, wo sie auch registriert werden können.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <FormGroup className="mx-3">
                        <FormLabel>
                            <strong>Art der Abgabe: </strong>
                        </FormLabel>
                        <div className="ms-1 mb-1">
                            <label className="ms-1">
                                Abgabe an der Geschäftstelle <input className="mx-1" type="radio" id="abgabeX" value="abgabeX" checked={selectedValue === "abgabeX"} onChange={() => handleRadioChange("abgabeX")} />
                            </label>
                        </div>
                        <div className="ms-1 my-1">
                            <label className="ms-1">
                                Abholung <input className="mx-1" type="radio" id="abholungX" value="abholungX" checked={selectedValue === "abholungX"} onChange={() => handleRadioChange("abholungX")} />
                            </label>
                        </div>
                    </FormGroup>
                </Col>
                <Col className="mx-3">
                    {(selectedValue == "abholungX") ? <Abholung plz={plz} ort={ort} handleBestaetigung={handleBestaetigung} /> : <Abgabe plz={plz} handleBestaetigung={handleBestaetigung} />}
                </Col>
            </>
        );
    }
}