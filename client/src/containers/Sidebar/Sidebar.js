import React, {Component} from 'react';
import {Sidebar, Menu} from 'semantic-ui-react';
import './Sidebar.css';

class SidebarContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentWillMount() {}

    handleToggleSidebar = () => this.setState({visible: !this.state.visible});

    // renderChildren(props) {
    //     return React.Children.map(props.children, child => {
    //         return React.cloneElement(child, {
    //             handleToggleSidebar: props.handleToggleSidebar
    //         })
    //     });
    // }

    render() {
        const {visible} = this.state;
        const childrenWithSidebar = React.Children.map(this.props.children, (child) =>
            React.cloneElement(child, {
                handleToggleSidebar: this.handleToggleSidebar
            })
        );
        return (
            <Sidebar.Pushable className="sidebar-container">
                <Sidebar as={Menu}
                         animation='push'
                         width='thin'
                         visible={visible}
                         icon='labeled'
                         vertical
                         inverted>
                </Sidebar>
                <Sidebar.Pusher>
                    {childrenWithSidebar}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }

}

export default SidebarContainer;