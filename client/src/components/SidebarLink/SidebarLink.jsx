import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SidebarLink = props => (
  <Link to={props.path} key={props.name} href={props.path}>
    <Menu.Item name={props.name} key={props.name}>
      {props.name}
    </Menu.Item>
  </Link>
);


SidebarLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SidebarLink;
