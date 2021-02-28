/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Postsubmit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            country: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            recipe: '',
            touched: {
                firstName: false,
                lastName: false,
                country: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Submit a Post</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                        <div className="col">
                        <h2>Post a Recipe</h2>
                        </div>
                </div>
                

                <div className="row row-content">
                    <div className="col-md-8">
                            <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md={6}>
                                    <Label htmlFor="firstName">First Name</Label>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name" className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                    <Label htmlFor="lastName">Last Name</Label>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name" className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Col md={6}>
                                    <Label htmlFor="phoneNum" >Phone</Label>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number" className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 characters',
                                                maxLength: 'Must be 15 characters or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                    <Label htmlFor="email">Email</Label>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email" className="form-control"
                                            validators={{
                                                required, 
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group mt-1">
                                    <Col md={4}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree"
                                                    name="agree" className="form-control-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <Control.select 
                                        model=".contactType" 
                                        name="contactType" className="form-control">
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="feedback">Your Feedback</Label>
                                        <Control.textarea 
                                            model=".feedback" 
                                            id="feedback" 
                                            name="feedback" 
                                            rows="12" 
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                </div>
            </div>
        );
    }
}

export default Postsubmit;
