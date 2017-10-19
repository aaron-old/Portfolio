import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu } from 'semantic-ui-react';
import './Sidebar.css';
import { routes } from '../../components/Router/RouteConfig';
import SidebarLink from '../../components/SidebarLink/SidebarLink';

class SideBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.childrenWithSidebar = this.childrenWithSidebar.bind(this);
  }

  handleToggleSidebar() {
    this.setState({ visible: !this.state.visible });
  }

  childrenWithSidebar() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        handleToggleSidebar: this.handleToggleSidebar.bind(this),
        sidebarVisible: this.state.visible,
      }));
  }

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable className="sidebar-container">
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={visible}
          icon="labeled"
          vertical
          inverted
        >
          {routes.map(({ name, path }) => (
            <SidebarLink
              name={name.toUpperCase()}
              path={path}
              key={name}
            />
          ))}
        </Sidebar>
        <Sidebar.Pusher>
          {this.childrenWithSidebar()}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

SideBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default SideBarContainer;
