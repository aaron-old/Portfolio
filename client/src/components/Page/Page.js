import React from 'react';
import {Container} from 'semantic-ui-react';
import SidebarButton from '../../containers/Sidebar/SidebarButton';

const Page = (props) => {
    return (
        <Container fluid>
            <SidebarButton
                sidebarVisible={props.sidebarVisible}
                handleToggle={props.handleToggleSidebar}/>
            Page Content / Route Components Rendered here.
        </Container>
    )
};

export default Page;