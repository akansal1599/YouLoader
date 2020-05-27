import React from 'react';

import Container from '@material-ui/core/Container';
 import Footer from "./Footer/Footer";
 import ButtonAppBar from "./Toolbar/Toolbar";

const Layout = (props) => {

    return (
        <div style={{background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}>
            <ButtonAppBar/>
            <Container maxWidth="md">
            <main>
                {props.children}
            </main>
            </Container>
            <Footer/>
        </div>
    );
}


export default Layout;
