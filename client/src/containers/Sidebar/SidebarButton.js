import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

class SidebarButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: props.sidebarVisible
        };
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick() {
        this.setState({open: !this.state.open});
        this.props.handleToggle();
    }

    render() {
        return this.state.open ?
            <Icon name="close" size={this.props.size} onClick={this.handleIconClick}/> :
            <Icon name="bars" size={this.props.size} onClick={this.handleIconClick}/>
    }
}


SidebarButton.PropTypes = {
    size: PropTypes.string,
    handleToggle: PropTypes.func.isRequired
};

SidebarButton.defaultProps = {
    size: "big"
};

export default SidebarButton
