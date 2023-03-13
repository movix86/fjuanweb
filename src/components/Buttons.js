import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Badge from 'react-bootstrap/Badge';

import { useState, useEffect } from 'react';

const Buttons = () => {

  const  [boxState, usetBoxState] = useState("");

  if(boxState=="more"){
    return (
      <>
          <Row>
            <Col sm={12}>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("more")}}>Skills</Button>
                <Button variant="secondary">MVC</Button>
                <Button variant="secondary">Styles</Button>
                <Button variant="secondary">Python</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='skills'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
            <Col sm={6} className='image-skills'>
              <img src='https://cdn.pixabay.com/photo/2019/04/04/08/01/icon-4102192_1280.png' width="500" height="600" />
            </Col>
          </Row>
      </>
    );
  }else{
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("more")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{alert("I know Styles Model MVC")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{alert("I know Styles CSS")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{alert("I am learning Python in this 2023")}}>Python</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='skillStart'>
            <h1>
              Hello, my name is Juan and i am a web developer <Badge bg="secondary">New</Badge>
            </h1>
          </Col>
        </Row>
      </>
    );
  }
}


export default Buttons;