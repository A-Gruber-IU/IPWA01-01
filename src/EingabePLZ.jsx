import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import CheckPLZ from "./CheckPLZ";

export default function EingabePLZ({handleBestaetigung}) {
  const [plz, setPlz] = useState(null);
  const [ort, setOrt] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function ortsDaten(plz) {
      try {
        if (plz != null) {
          const response = await fetch('https://openplzapi.org/de/Localities?postalCode=' + plz);
          if (!response.ok) {
            throw new Error('Keine Daten für diese PLZ gefunden');
          }
          const ortJson = await response.json();
          setOrt(ortJson[0].name);
          setError(null);
        }
      } catch (e) {
        setError(e.message);
      }
    };
    ortsDaten(plz);
  }, [plz]);

  return (
    <>
      <Row>
        <h1 className="text-center my-4">Registriere deine Kleiderspende!</h1>
      </Row>
      <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1} className="mx-3 my-3">
        <Form.Label className="mx-1"><strong>Postleitzahl: </strong></Form.Label>
        <input
          value={plz} id="plzEingabe" type="number" required placeholder="12345"
          onChange={(e) => { setPlz(e.target.value,); }} />
      </Col>
      <CheckPLZ plz={plz} fehler={error} ort={ort} handleBestaetigung={handleBestaetigung} />
    </>
  );
}