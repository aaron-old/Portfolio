import React from 'react';
import {Container} from 'semantic-ui-react';

const Page = (props) => {
    console.log(props);

    return (
        <Container fluid>
            Page
            <button type="button" onClick={props.handleToggleSidebar}>Toggle Sidebar</button>
        </Container>
    )
};

export default Page;