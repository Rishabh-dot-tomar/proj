import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Col, Label, Form, FormGroup } from 'reactstrap';
// import logo from '../assets/img/dctr.png'
import logo from '../assets/img/dctr.png';
import { NavLink } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: ["Neuro", "Cardio", "Radiology"]
        }

    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem className="d-md-down-none">
                            <NavLink to="#"><img src={logo} alt="Profile" height="50px" /></NavLink>
                        </NavItem>
                        <NavItem className="d-md-down-none pl-2">
                            <NavLink to="#">TeleMedicine</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Form>
                    <FormGroup row style={{ margin: "2rem" }}>
                        <Col md="6">
                            <FormGroup row>
                                <Button size="lg"><NavLink to="/Login">Login as Doctor</NavLink></Button>
                            </FormGroup>
                            <FormGroup row>
                                <Button size="lg">Consult a Doctor</Button>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <Label><b>Department</b></Label>
                            <ul>
                                {this.state.list.map(item =>
                                    <li key={item}>{item}</li>
                                )}
                            </ul>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Main;
