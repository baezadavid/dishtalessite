/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class Postsubmit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            country: '',
            image: '',
            description: '',
            touched: {
                firstName: false,
                lastName: false,
                description: false
            }
        };

        // this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.postBlog(this.props.blogId, values.name, values.country, values.image, values.description);
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
                        <h2>Submit a Recipe</h2>
                        </div>
                </div>
                

                <div className="row row-content">
                    <div className="col-md-12">
                            <LocalForm model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md={6}>
                                    <Label htmlFor="name">Name</Label>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Name" className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
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
                                    <Label htmlFor="country">Country</Label>
                                        <Control.text model=".country" id="country" name="country"
                                            placeholder="Country" className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".country"
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
                                    <Col>
                                    <Label htmlFor="description">Description</Label>
                                        <Control.textarea 
                                            model=".description" 
                                            id="description" 
                                            name="description" 
                                            rows="12" 
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".description"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="image">Upload Photos</Label>
                                        <Control.file 
                                            model=".image" 
                                            id="image" 
                                            name="image" 
                                            className="form-control"
                                        />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Add Post
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                </div>
            </div>
        );
    }
}

export default Postsubmit;
