import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, } from "reactstrap";
//import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './modal.scss';

export default function Modal({ title, show, data, onModalClose, onModalEnquire, inputPlaceholder, isItemModal, updatewhat, previousdata }) {

    const onEnquire = () => {
        onModalEnquire(data);
    }
    const onClose = e => {
        onModalClose();
    };

    if (!show)
        return null;

    return (
        <Col lg="12" md="6" sm="6">
            <Row>
                <Col lg="6" md="6" sm="6" style={{ display: 'flex' }}>
                    <h1>{data.number}</h1>
                </Col>
                <Col lg="6" md="6" sm="6" style={{ display: 'flex' }}>
                    <button className="toggle-button" onClick={onEnquire}>
                        ENQUIRE
                    </button>
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="6" sm="6">
                    <img src={data.uri} />
                </Col>

                <Col lg="6" md="6" sm="6" style={{ display: 'flex' }}>
                    <textarea className="tarea" id="noter-text-area" name="textarea" placeholder="specifications" value={data.specification} style={styles.specificationInput} onChange = {()=>{}} />
                </Col>
            </Row>
        </Col>
    );
}

const styles = {
    modalDialog: {
        width: '500px',
        background: 'white',
        border: '1px solid #ccc',
        transition: '1.1s ease-out',
        boxShadow: '5px 5px 18px rgba(0,0,0,0.6)',
        transform: 'scale(1)',
        opacity: 1,
        visibility: 'visible'
    },
    ColumnStyle: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    },
    SelectFileButtonStyle: {
        width: '80%',
        margin: 'auto',
        padding: 13,
        marginTop: 20,
        backgroundColor: '#004499',
        color: 'white',
        fontSize: 20,
    },
    specificationInput: {
        resize: 'none',
        width: '80%',
        height: 400,
        margin: 'auto',
        backgroundColor : 'rgba(0,0,0,0)',
        fontSize: 20,
        borderWidth: 0,
    }
}