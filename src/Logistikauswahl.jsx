import Form from 'react-bootstrap/Form';

function Logistikauswahl() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="postleitzahl">
        <Form.Label>Postleitzahl</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default Logistikauswahl;