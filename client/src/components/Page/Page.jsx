import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';
import SidebarButton from '../SidebarButton/SidebarButton';
import PageRouter from '../Router/PageRouter';

const Page = props => (
    <Container fluid>
      <SidebarButton
          sidebarVisible={props.sidebarVisible}
          handleToggle={props.handleToggleSidebar}
      />
      <PageRouter/>
    </Container>
);

Page.propTypes = {
  sidebarVisible: PropTypes.bool,
  handleToggleSidebar: PropTypes.func,
};

Page.defaultProps = {
  sidebarVisible: false,
  handleToggleSidebar: null,
};

export default Page;
