import Logistikauswahl from './Logistikauswahl.jsx';
import Header from './Header.jsx';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col>
          <Logistikauswahl />
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
};

export default App;