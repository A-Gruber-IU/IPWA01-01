import { Card, Row, Col, Form } from "react-bootstrap";

export function PlzCheck() {
    if ((form.plz > 99999)||(String(form.plz).length < 5)||(form.plz < 1)) {
      return (
        <Card>
          <Card.Body className="bg-light text-bg-light">
            <Card.Text>Bitte gib deine Postleitzahl an, damit wir prüfen können, ob der Abholort im Einzugsgebiet liegt.
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    else if ((form.plz > 83999)||(form.plz < 83000)) {
      return (
        <Card>
          <Card.Header as="h5" className="bg-primary text-bg-primary">Keine Abholung möglich!</Card.Header>
          <Card.Body className="bg-light text-bg-light">
            <Card.Text>Leider liegt der angegebene Ort außerhalb des Einzugsgebiets für Abholungen. Du kannst die Kleider gerne aber gerne bei der Geschäftstelle abgeben.</Card.Text>
          </Card.Body>
        </Card>
      );
    }
    else if ((82999 < form.plz)&&(form.plz < 84000)) {
      return (
        <Card>
          <Card.Header as="h5" className="bg-success text-bg-success">Alles im grünen Bereich!</Card.Header>
          <Card.Body className="bg-light text-bg-light">
            <Card.Text>Der angegebene Ort liegt im Einzugsgebiet für Sammelaktion. Du kannst hier deine Kleiderspende zur Abholung registrieren.</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }