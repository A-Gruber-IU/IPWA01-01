import { Container, Col, Row, Form, FormGroup, FormLabel, FormCheck } from 'react-bootstrap';

function Logistikauswahl() {
  return (
    <Container className='ms-3 mt-3'>
      <Form>
        <Row className='my=4'>
          <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>
            <Form.Group className="mb-3" controlId="postleitzahl">
              <Form.Label>Postleitzahl</Form.Label>
              <Form.Control type="number" placeholder="12345" />
            </Form.Group>
          </Col>
          <Col>
              <FormGroup>
                <FormLabel><strong>Art der Abgabe</strong></FormLabel>
                <FormCheck name="Logistikauswahl" label="Abholung" id="Abholung" type="radio"/>
                <FormCheck name="Logistikauswahl" label="Abgabe an Geschäftstelle" id="Abgabe" type="radio"/>
              </FormGroup>
          </Col>
        </Row>
        <Row className='my-3'>
          <p>Next Row</p>
        </Row>
      </Form>
    </Container>
  );
}

export default Logistikauswahl;