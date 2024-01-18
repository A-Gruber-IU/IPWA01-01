import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import NeuesTeil from "./NeuesTeil";

export default function Abholung({ plzIn, ortRe }) {
    let plz = plzIn;
    let ort = ortRe;

    // Die Formulardaten werden mit useState kontrolliert, damit darauf in Abhängigkeit des State, also Echtzeit zugegriffen werden kann

    const [form, setForm] = useState({
        vorname: '',
        nachname: '',
        strasse: '',
        email: '',
        datenschutz: '',
        gebiet: '',
    });
    // Funktionen zum Hinzufügen und entfernen eines neuen Kleidungsstücks. Die Kleidungsobjekte werden als Array geführt.

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
            const letzteKleidung = kleiderArray[kleiderArray.length - 1]; // Das letzte Element im Array
            setKleiderArray(kleiderArray => kleiderArray.filter(element => element !== letzteKleidung)); // Behalte alle Elemente bei, die nicht dem letzten Element entsprechen
        }
    }

    // Funktion, die das Abschicken der Daten und rendering der Daten als Bestätigung übernimmt

    async function handleSubmit(event) {
        event.preventDefault(); // verhindert Abschicken der Formulardaten mit normaler POST/GET-Funktion und Wechseln zur Ziel-URL
        try {
            const response = await fetch("/public/pages/registrierung.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datenOut),
            });
            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Funktion, die die Formulardaten zusammenstellt, damit diese zur Bestätigung ausgegeben und verschickt werden können.

    function iteriereKleiderArray(event) {
        event.preventDefault();
        let datenOut = JSON.stringify(formularDaten);
        console.log(datenOut);
        for (let i = 0; i < kleiderArray.length; i++) {     // Für die variable Anzahl an Kleidungsstücken muss über das Array iteriert werden, um die Werte auszulesen
            if (i < kleiderArray.length) {
                console.log(document.getElementById(`kleidungsBezeichnung${i+1}, `).value);
                console.log(document.getElementById(`kleiderArt${i+1}, `).value);
            }
          }
        console.log(datenOut);
        console.log(document.forms.Spenden_Registrierung);
        console.log(document.getElementById("spendenReg"));
        console.log(document.forms.Spenden_Registrierung.elements);
        console.log(document.getElementById("spendenReg").elements);
        console.log(document.getElementById("spendenReg").attributes);
        console.log(document.getElementById("spendenReg")[1].getAttribute("value"));
    }

    const formularDaten = {
        Logistik: "Abholung",
        Vorname: form.vorname,
        Nachname: form.nachname,
        PLZ: plz,
        Ort: ort,
        Strasse_Nr: form.strasse,
        Email: form.email,
        Gebiet: form.gebiet,
        Datenschutz: form.datenschutz,
    }

    return (
        <Container className="pe-5">
            <h4 className="my-4">Sag uns bitte wo wir deine Kleider abholen dürfen.</h4>
            <form name="Spenden_Registrierung" id="spendenReg" className="needs-validation" method="post" action="/public/pages/kontakteingang.html">
                <Row>
                    <Col className="align-self-end">
                        <label>
                            Vorname: &nbsp;<input className="mb-2" id="vorname" name="Vorname" value={form.vorname} required type="text" onChange={(e) => { setForm({ ...form, vorname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Nachname: &nbsp;<input className="mb-2" id="nachname" name="Nachname" value={form.nachname} required type="text" onChange={(e) => { setForm({ ...form, nachname: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Email: &nbsp;<input className="mb-2" id="emailadresse" name="Emailadresse" value={form.email} type="email" required onChange={(e) => { setForm({ ...form, email: e.target.value, }); }} />
                        </label>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col className="align-self-end">
                        <label>
                            Postleitzahl: &nbsp;<input className="mb-2" id="postleitzahl" name="Postleitzahl" value={plz} type="number" readOnly />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>
                            Ort: &nbsp;<input className="mb-2" id="ortsangabe" name="Ortsangabe" value={ort} type="text" readOnly />
                        </label>
                    </Col>
                    <Col className="align-self-end">
                        <label>Straße, Nr.: &nbsp;<input className="mb-2" id="strasseNr" name="Strasse_Nr" value={form.strasse} type="text" required onChange={(e) => { setForm({ ...form, strasse: e.target.value, }); }} />
                        </label>
                    </Col>
                    <Col className="my-1 align-self-end">
                        <label>
                            Wo soll deine Spende hingehen? &nbsp; <select className="btn text-black bg-secondary-subtle" name="Auswahl_Krisengebiet" id="auswahlGebiet" value={form.gebiet} onChange={(e) => { setForm({ ...form, gebiet: e.target.value, }); }} required>
                                <option disabled value="">Bitte wähle ein Krisengebiet...</option>
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
                    <button className="btn btn-danger my-3" onClick={entferneKleidungsstueck}>- Letztes Kleidungsstück löschen -</button>
                </Row>
                <Row>
                    <label className="my-3">
                        Ich habe die <a href="/public/pages/datenschutz.html">Datenschutzhinweise</a> zur Kenntnis genommen und akzeptiert. &nbsp; 
                        <input type="checkbox" id="datenschutzEinwilligung" name="Datenschutzeinwilligung" onChange={(e) => { setForm({ ...form, datenschutz: e.target.value, }); }} required />
                    </label>
                    <div className="col-auto my-4">
                        <button type="submit" className="btn btn-primary" >Absenden!</button>
                    </div>
                </Row>
            </form>
        </Container>
    );
}