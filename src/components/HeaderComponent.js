import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { toggleModal, setShow } from '../store/app.actions';
import logo from '../assets/img/logo contorno.png';

function HeaderComponent() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.show);

    const handleClick = () => {
        dispatch(toggleModal(true));
    };

    const handleShow = () => {
        dispatch(setShow(!show));
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
                <Button color="danger" onClick={handleShow} style={{backgroundColor: '#d16460'}} >
                    <span className="navbar-toggler-icon" />
                </Button>
            </Navbar>
        </>
    );
}

export default React.memo(HeaderComponent);