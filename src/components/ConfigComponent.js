import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, setConfig } from '../store/app.actions';
import { Modal, Button, Row, Col, Form, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ConfigComponent() {
    const dispatch = useDispatch();
    const [ minutes, setMinutes ] = useState('00');
    const [ seconds, setSeconds ] = useState('00');
    const [ message, setMessage ] = useState('');
    const [ endMessage, setEndMessage ] = useState('');
    const toggle = useSelector(state => state.modal);

    const moveToggle = () => {
        dispatch(toggleModal(!toggle));
    };

    const handleButton = () => {
        const timer = {
            date: Date.now() +  (Number(minutes) * 60000) +  (Number(seconds) * 1000),
            message: message,
            endMessage: endMessage
        };
        dispatch(setConfig(timer));
        moveToggle();
    };

    const handleMinute = (event) => {
        setMinutes(event.target.value)
    };

    const handleSeconds = (event) => {
        setSeconds(event.target.value)
    };

    const handleMessage = (event) => {
        setMessage(event.target.value)
    };

    const handleEndMessage = (event) => {
        setEndMessage(event.target.value)
    };

    return(
        <Modal isOpen={toggle} toggle={moveToggle} centered={true}>
            <ModalHeader toggle={moveToggle}>Configuración de temporizador</ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Col className="text-center">
                            <Label className="font-weight-bold">Tiempo (mm:ss)</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} />
                        <Col md={2}>
                            <FormGroup>
                                <Label for="configMinutes" hidden>Minutos</Label>
                                <Input type="text" name="minutes" id="configMinutes" value={minutes} onChange={handleMinute} />
                            </FormGroup>
                        </Col>
                        <div className="center-config">:</div>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="configSeconds" hidden>Segundos</Label>
                                <Input type="text" name="seconds" id="configSeconds" value={seconds} onChange={handleSeconds} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <FormGroup>
                                <Label for="configAlert" className="font-weight-bold">Descripción</Label>
                                <Input type="textarea" name="alert" id="configAlert" value={message} onChange={handleMessage} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <FormGroup>
                                <Label for="configFinal" className="font-weight-bold">Mensaje de Finalización</Label>
                                <Input type="textarea" name="alert" id="configFinal" value={endMessage} onChange={handleEndMessage} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={handleButton}>Establecer</Button>
                <Button color="secondary" onClick={moveToggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ConfigComponent;