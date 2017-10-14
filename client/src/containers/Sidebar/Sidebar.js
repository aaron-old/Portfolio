import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Sidebar, Menu} from 'semantic-ui-react';
import './Sidebar.css';

class SideBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    handleToggleSidebar() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        const {visible} = this.state;
        const childrenWithSidebar = React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
                handleToggleSidebar: this.handleToggleSidebar.bind(this),
                sidebarVisible: this.state.visible,
            }));
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
                />
                <Sidebar.Pusher>
                    {childrenWithSidebar}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

SideBarContainer.PropTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


export default SideBarContainer;
