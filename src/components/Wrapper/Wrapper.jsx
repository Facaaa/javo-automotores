import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Wrapper = (props) => {
    const { children } = props;
    return (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    );
}

export default Wrapper;

