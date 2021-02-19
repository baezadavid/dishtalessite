import React, {Component} from "react";
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import {Link} from "react-router-dom";
//import {Control, LocalForm, Errors} from "react-redux-form";

//class RecipeInfo extends Component {

   function RenderRecipe({recipe}) {
        return (
            <div className="col-md-5 m-1">
                 <Card>
                    <CardImg top src={recipe.image} alt={recipe.name} />
                    <CardBody>
                        <CardTitle><h4><strong>{recipe.name}</strong></h4></CardTitle>
                        <CardText><strong>Servings:</strong> {recipe.servings} <br /><strong>Ingredients:</strong> <br/> {recipe.ingredients}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderDirections({directions}) {
        if(Array.isArray(directions)) {
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
        return <div />
    }
    
    function RecipeInfo(props) {
        
        if(props.recipe) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderRecipe recipe={props.recipe} />
                        {/*{this.renderRecipe(this.props.recipe)}*/}
                        <RenderDirections directions={props.recipe.directions} />     {/*Not sure if I should remove the recipe between props and directions */}
                        {/*{this.renderDirections(this.props.recipe.directions)}*/}
                    </div>
                </div>
            );
        }
          return <div />
      
    }
//}


export default RecipeInfo 

