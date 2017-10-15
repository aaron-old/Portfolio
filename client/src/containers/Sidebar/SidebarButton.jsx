import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Menu} from 'semantic-ui-react';

const styles = {
  menu: {
    border: 'none',
  },
};

class SidebarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.sidebarVisible,
    };
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  handleIconClick() {
    this.setState({open: !this.state.open});
    this.props.handleToggle();
  }

  displayIcon() {
    return this.state.open ?
        <Icon name="close" size={this.props.size}/> :
        <Icon name="sidebar" size={this.props.size}/>;
  }

  render() {
    return (
        <Menu secondary attached="top" style={styles.menu}>
          <Menu.Item onClick={this.handleIconClick} as="a">
            {this.displayIcon()}
          </Menu.Item>
        </Menu>
    );
  }
}


SidebarButton.propTypes = {
  size: PropTypes.string,
  handleToggle: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
};

SidebarButton.defaultProps = {
  size: 'big',
};

export default SidebarButton;
