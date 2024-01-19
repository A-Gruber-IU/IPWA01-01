import { Row, Col, Card } from "react-bootstrap";

export default function ZeigeBestaetigung({ bestaetigung }) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <>
            <Row className="mx-3 my-5 text-center">
                <h1>Vielen Dank für deine Spende!</h1>
            </Row>
            <Row className="mx-3 my-3 text-center">
                <h3>Wir bestätigen den Eingang folgender Daten:</h3>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} sm={9} md={7} lg={6} xl={5} xxl={4} className="mx-3 mb-3">
                    <Card className="mx-auto">
                        <Card.Body className="bg-light text-bg-light">
                            <Card.Text>{bestaetigung}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}