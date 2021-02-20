import React, {Component} from "react";
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import {Link} from "react-router-dom";


   function RenderBlog({blog}) {
        return (
            <div className="col-md-5 m-1">
                 <Card>
                    <CardImg top src={blog.image} alt={blog.name} />
                    <CardBody>
                        <CardTitle><h4><strong>{blog.name}</strong></h4></CardTitle>
                        {/*<CardText><strong>Servings:</strong> {recipe.servings} <br /><strong>Ingredients:</strong> <br/> {recipe.ingredients}</CardText>*/}
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderDescription({blog}) {
        
       return (
           <div className="col-md-5 m-1">
               <Card>
                   {/* <CardImg top src = {blog.image} alt = {blog.name} /> */}
                   <CardBody>
                       <CardText>{blog.description}</CardText>
                   </CardBody>
               </Card>
           </div>
         )
        

        /*if(Array.isArray(directions)) {
           return (
               <div className="col-md-5 m-1">
                   <h4><strong>Directions</strong></h4>
                   {directions.map((direction,index) => 
                       <div key={index}>
                           {direction}
                       </div>
                   )}
               </div>
           );
       }
        return <div />*/
    }
    
    function BlogInfo(props) {
        
        if(props.blog) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderBlog blog={props.blog} />
                        <RenderDescription blog={props.blog} />     
                    </div>
                </div>
            );
        }
          return <div />
      
    }
//}


export default BlogInfo 

