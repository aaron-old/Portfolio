import React from 'react';
import {Container} from 'semantic-ui-react';
import Sidebar from '../../containers/Sidebar/Sidebar';

const Layout = props => (
    <Container fluid>
        <Sidebar>
            {props.children}
        </Sidebar>
    </Container>
);
export default Layout;
