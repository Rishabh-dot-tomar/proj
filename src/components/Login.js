import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button, Col, Form, InputGroup, InputGroupAddon, InputGroupText, Input, Row } from 'reactstrap';
import logo from '../assets/img/dctr.png';
import '../index.css';
// import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {
        username: '',
        password: ''
      }
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log("user and pass", fields)
  }

  contactSubmit = (e) => {
    let fields = this.state.fields
    e.preventDefault();
    console.log("fields", fields);
    var user_pass = {
      "username": fields["username"],
      "password": fields["password"]
    }
    console.log("user login", user_pass)

    //  axios.post(`http://${AwsIp}:${AwsPort}/user/login`,user_pass )
    //    .then(res => {
    //      console.log("data received"+ JSON.stringify(res.data));
    //    })
    //    .catch(e =>{
    //     alert("Internal Server Error");
    //   })
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem className="d-md-down-none">
              <NavLink to="#"><img src={logo} alt="Profile" height="50px" /></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink to="#">TeleMedicine</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Form className="input-class" onSubmit={this.contactSubmit}>
          <h5><p className="mb-3 left-padding">Sign In to your account</p></h5>
          <InputGroup className="mb-3 w-50">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                Patient ID
                          </InputGroupText>
            </InputGroupAddon>
            <Input type="text" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]} style={{ width: "10rem" }} />
          </InputGroup>
          <InputGroup className="mb-4 w-50">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                Unique Code
                          </InputGroupText>
            </InputGroupAddon>
            <Input type="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} style={{ width: "12rem" }} />
          </InputGroup>
          <Row>
            <Col className="align-center" xs="6">
              <Button type="submit">Login</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default App;