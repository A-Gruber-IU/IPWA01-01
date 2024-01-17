import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function NeuesTeil({ kleiderNr }) {
    const [bezeichnung, setBezeichnung] = useState('');

    return (
        <>
            <h5 className="mt-4">Kleidungsstück Nr. {kleiderNr}</h5>
            <Row>
                <Col className="mx-auto mb-3">
                    <label>
                        Art des Kleidungsstücks? &nbsp; <select className="btn text-black bg-secondary-subtle" name="auswahlKleiderArt" id={`kleiderArt${kleiderNr}`} defaultValue={"nichts"} required>
                            <option disabled value="nichts">Bitte wähle die Art des Kleidungsstücks...</option>
                            <option value="Hose">Hose</option>
                            <option value="Hemd">Hemd/Blouse</option>
                            <option value="Shirt">T-Shirt/Top</option>
                            <option value="Jacke">Jacke</option>
                            <option value="Pullover">Pullover</option>
                            <option value="Schuhe">Schuhe</option>
                            <option value="Kopfbedeckung">Mütze/Basecap/Hut</option>
                            <option value="Sonstiges">Sonstiges</option>
                        </select>
                    </label>
                </Col>
                <Col className="align-self-center">
                    <label>Bezeichnung : &nbsp;<input className="mb-2" id={`kleidungsBezeichnung${kleiderNr}`} value={bezeichnung} type="text" onChange={(e) => { setBezeichnung(e.target.value); }} /></label>
                </Col>
            </Row>
        </>
    );
}