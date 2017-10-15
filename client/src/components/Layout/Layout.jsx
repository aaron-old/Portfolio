import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';
import Sidebar from '../../containers/Sidebar/Sidebar';

const Layout = props => (
    <Container fluid>
      <Sidebar>
        {props.children}
      </Sidebar>
    </Container>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
