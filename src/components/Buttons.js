import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Buttons = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Api Rest</Button>
      <Button variant="secondary">MVC</Button>
      <Button variant="secondary">Styles</Button>
      <Button variant="secondary">Python</Button>
    </ButtonGroup>
  );
}


export default Buttons;