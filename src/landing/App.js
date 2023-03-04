import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
        <Container style={mystyle}>
            <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            </Row>
        </Container>
    )
}

export default App;