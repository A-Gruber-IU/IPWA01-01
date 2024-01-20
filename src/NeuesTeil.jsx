import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function NeuesTeil({ kleiderNr }) {
    const [kleiderArt, setKleiderArt] = useState('');
    const [bezeichnung, setBezeichnung] = useState('');

    return (
        <>
            <h5 className="mt-4">Kleidungsstück Nr. {kleiderNr}</h5>
            <Row>
                <Col className="mx-auto mb-3">
                    <label>
                        Art des Kleidungsstücks? &nbsp; <select className="btn text-black bg-secondary-subtle" name={`Auswahl Kleiderart ${kleiderNr}`} id={`kleiderArt${kleiderNr}`} value={kleiderArt}  onChange={(e) => { setKleiderArt(e.target.value); }} required>
                        <option disabled value="">Bitte wähle die Art des Kleidungsstücks...</option>
                            <option value="Hose">Hose</option>
                            <option value="Hemd/Bluse">Hemd/Bluse</option>
                            <option value="Shirt">T-Shirt/Top</option>
                            <option value="Jacke">Jacke</option>
                            <option value="Pullover">Pullover</option>
                            <option value="Schuhe">Schuhe</option>
                            <option value="Kopfbedeckung">Mütze/Basecap/Hut</option>
                            <option value="Kleid">Mütze/Basecap/Hut</option>
                            <option value="Rock">Mütze/Basecap/Hut</option>
                            <option value="Sonstiges">Sonstiges</option>
                        </select>
                    </label>
                </Col>
                <Col className="align-self-center">
                    <label>Bezeichnung : &nbsp;<input className="mb-2" id={`kleidungsBezeichnung${kleiderNr}`} name={`Kleidung Bezeichnung ${kleiderNr}`} value={bezeichnung} type="text" required onChange={(e) => { setBezeichnung(e.target.value); }} /></label>
                </Col>
            </Row>
        </>
    );
}