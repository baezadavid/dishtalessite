import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron" fluid>
                    <video width="400" id="video-background" autoPlay muted loop>
                       <source src="/assets/videos/Video-Jumbotron.mp4" type="video/mp4"/>
                    </video>
                    <div className="container logo">
                        <div className="row">
                            <div className="col">
                                <NavLink className="nav-link" to="/home">
                                    <img src="/assets/images/Dish-tales-02.png" height="150" width="180" alt="Dish Tales Logo"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        {/*<NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="Dish Tales logo Logo" /></NavbarBrand>*/}
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog">
                                        <i className="fa fa-list fa-lg" /> Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>

        );
    }
}

export default Header;
