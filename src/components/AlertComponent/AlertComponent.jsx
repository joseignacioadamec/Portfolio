import Alert from "react-bootstrap/Alert";
import { Col, Row } from "react-bootstrap";
import "./alertComponent.css";

export const AlertComponent = ({ setCopied }) => {
  return (
    <Row>
      <Col>
        <div className="alert-container">
          <Alert variant="success" className="custom-alert">
            <div className="custom-closed" onClick={() => setCopied(false)}>
              X
            </div>
            <p>Email copiado correctamente</p>
          </Alert>
        </div>
      </Col>
    </Row>
  );
};
