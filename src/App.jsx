import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import EingabePLZ from "./EingabePLZ";
import ZeigeBestaetigung from "./ZeigeBestaetigung";



export default function App() {

  const [bestaetigung, setBestaetigung] = useState(null); // Der Zustand der Bestätigungsnachricht wird mit diesem Handler "nach unten gereicht", um die Nachricht nach Absenden zu erstellen
  function handleBestaetigung(nachricht) {
    setBestaetigung(nachricht);
  }

  if (bestaetigung == null) {
    return (
      <EingabePLZ bestaetigung={bestaetigung} handleBestaetigung={handleBestaetigung} />
    );
  } else {
    return (
      <ZeigeBestaetigung bestaetigung={bestaetigung} />
    );
  }
}