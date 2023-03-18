import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Badge from 'react-bootstrap/Badge';

/* Imagens */
import skills from '../img/image-skills.png';
import mvc from '../img/image-mvc.png';
import cssI from '../img/image-css.png'
import pythonI from '../img/image-python.png'

import { useState, useEffect } from 'react';



const Buttons = () => {

  const  [boxState, usetBoxState] = useState("");
  const uri = window.location.href + "img/";

  if(boxState=="skills"){
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("skills")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("mvc")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("styles")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("python")}}>Python</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='skills'>
            <ul>
              <p>PHP (4 años)</p>
              <p>Laravel (2 años)</p>
              <p>Mysql (3 años)</p>
              <p>Github (3 años)</p>
            </ul>
          </Col>
          <Col sm={6} className='image-skills'>
            <img src={skills} />
          </Col>
        </Row>
      </>
    );
  }else if(boxState=="mvc"){
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("skills")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("mvc")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("styles")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("python")}}>Python</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='skills'>
            <ul>  
              <p>MVC web development with php</p>
              <p>MVC web development with Laravel</p>
              <p>Entity-relationship model with mysql</p>
            </ul>
          </Col>
          <Col sm={6} className='image-skills'>
            <img src={mvc} />
          </Col>
        </Row>
      </>
    );
  }else if(boxState=="styles"){
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("skills")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("mvc")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("styles")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("python")}}>Python</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='skills'>
            <p>Configuration of CSS styles for web sites and landings</p>
          </Col>
          <Col sm={6} className='image-skills'>
            <img src={cssI} />
          </Col>
        </Row>
      </>
    );
  }else if(boxState=="python"){
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("skills")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("mvc")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("styles")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("python")}}>Python</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='skills'>
              <p>Web development with Python, one of the best backend languages available today</p>
          </Col>
          <Col sm={6} className='image-skills'>
            <img src={pythonI} />
          </Col>
        </Row>
      </>
    );
  }
  else{
    return (
      <>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" title="Habilidades" onClick={()=>{usetBoxState("skills")}}>Skills</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("mvc")}}>MVC</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("styles")}}>Styles</Button>
              <Button variant="secondary" onClick={()=>{usetBoxState("python")}}>Python</Button>
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