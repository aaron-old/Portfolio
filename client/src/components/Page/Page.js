import React from 'react';
import {Container} from 'semantic-ui-react';
import SidebarButton from '../../containers/Sidebar/SidebarButton';
import PageRouter from '../Router/PageRouter';

const Page = (props) => {
    return (
        <Container fluid>
            <SidebarButton
                sidebarVisible={props.sidebarVisible}
                handleToggle={props.handleToggleSidebar}/>
            <PageRouter/>
        </Container>
    )
};

export default Page;