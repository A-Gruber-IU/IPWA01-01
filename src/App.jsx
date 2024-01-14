import Logistik from './Logistik.jsx';
import Header from './Header.jsx';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Row>
          <Logistik />
      </Row>
    </>
  );
};

export default App;