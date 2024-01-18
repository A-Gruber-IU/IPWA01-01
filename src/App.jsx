import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import EingabePLZ from "./EingabePLZ";



export default function App() {

  const [bestaetigung, setBestaetigung] = useState(null); // Der Zustand der Bestätigungsnachricht wird mit diesem Handler "nach unten gereicht", um die Nachricht dann anzeigen zu können
  function handleBestaetigung(nachricht) {
    setBestaetigung(nachricht);
  }

  if (bestaetigung == null) {
    return (
      <EingabePLZ bestaetigung={bestaetigung} handleBestaetigung={handleBestaetigung} />
    );
  } else {
    return (
      <>
        <Row className="mx-3 my-5 text-center">
        <h1>Vielen Dank für deine Spende!</h1>
        </Row>
        <Row className="mx-3 my-3">
        <h3>Wir bestätigen den Eingang folgender Daten:</h3>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10}>
          {bestaetigung}
          </Col>
        </Row>
      </>
    );
  }
}