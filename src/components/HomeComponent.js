import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import RecipeInfo from './RecipeInfoComponent';

function RenderRecipeItem({recipe, onClick}) {
    return (
        <Card onClick={() => onClick(recipe.id)}  /*onClick={ () => this.onRecipeSelect(recipe)}*/ >
            <Link to={`/home/${recipe.id}`}>
                <CardImg width="100%" src={recipe.image} alt={recipe.name} />
                <CardImgOverlay>
                    <CardTitle>{recipe.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}


function  Home(props) {
    /*constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: null
        };
    }

    onRecipeSelect(recipe) {
        this.setState({selectedRecipe: recipe});
    }*/


   // render() {
        const recipe = props.recipes.map(recipe => {
            return (
                    <div key={recipe.id} className="col-md-5 m-1">
                        <RenderRecipeItem recipe={recipe} onClick={props.onClick} />
                        {/*<RecipeInfo recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}/>*/}
                        <RecipeInfo recipe={props.recipes.filter(recipe => recipe.id === props.selectedRecipe)[0]}/>

                    {/*<Card onClick={() => this.props.onClick(recipe.id)}>*/}  {/*onClick={ () => this.onRecipeSelect(recipe)}*/} 
                        {/*<CardImg width="100%" src={recipe.image} alt={recipe.name} />
                        <CardImgOverlay>
                            <CardTitle>{recipe.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>*/}
                    </div>  
            )
        });
    

      return (
          <React.Fragment>
                <div className="container">
                        <div className="row">
                            <div className="col">
                                <form className="search-form">
                                    <input className="search-bar" type="text" /> 
                                    <button className="search-button" type="submit">Search by ingredient</button>
                                </form>
                            </div>
                        </div>
                    </div>
            <div className="container">
                <div className="row">
                    {recipe}
                </div>
           {/*<RecipeInfo recipe={this.state.selectedRecipe}/>*/}
            </div>
        </React.Fragment>
    );
  //}

}

export default Home;