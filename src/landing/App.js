import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buttons from '../components/Buttons';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import './App.css';
import Navweb from '../components/Navweb';

const App = () => {

    const[loadBody, setLoadBody]=useState(true);

    useEffect(()=>{
        loadBodyData();
    },[]);

    function loadBodyData(){
        setTimeout(()=>{
            setLoadBody(false);
        },3000);
    }

    if (loadBody===true) {
        return (
            <div className='loadBodyData'>
                <Spinner animation="border" variant="secondary" /><br></br>
                <span>Cargando Juan </span>
            </div>
        );
    }else{
        return (
            <div className="App">
                <Row>
                    <Col xs={12} md={12} className='body'>
                        <Navweb />
                        <Buttons />
                    </Col>
                    <Col xs={12} md={8} className="footer">sm=12</Col>
                </Row>
            </div>
        )
    }
    
}

export default App;