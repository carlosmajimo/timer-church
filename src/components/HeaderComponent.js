import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { toggleModal } from '../store/app.actions';
import logo from '../assets/img/logo contorno.png';

function HeaderComponent() {
    const dispatch = useDispatch();
    const [show, setShow] = useState('close');

    const handleClick = () => {
        dispatch(toggleModal(true));
    };

    return(
        <>
            <Navbar style={{backgroundColor: '#EB6864'}}>
                <NavbarBrand>
                    <img src={logo} alt="..." className="brand-logo" />
                </NavbarBrand>
                <Button color="danger" onClick={handleClick} style={{backgroundColor: '#eb6864'}} >
                    <span className="navbar-toggler-icon" />
                </Button>
            </Navbar>
        </>
    );
}

export default React.memo(HeaderComponent);