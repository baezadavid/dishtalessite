import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { RECIPES } from '../shared/recipes';
//import { Navbar, NavbarBrand} from "reactstrap";
import RecipeInfo from './RecipeInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
        constructor(props) {
            super(props);
            this.state ={
                recipes: RECIPES,
                selectedRecipe: null
            };
        }

        onRecipeSelect(recipeId) {
            this.setState({selectedRecipe: recipeId});
        }

       

        render() {

            const RecipeWithId = ({match}) => {
                console.log(this.state.recipes);
                return (
                    <RecipeInfo recipe={this.state.recipes.filter(recipe=> recipe.id === +match.params.recipeId)[0]} />
                        /*directions={this.state.directions.filter(direction => direction.recipeId === +match.params.recipeId)}*/
                    
                );
            }

            return (
                 <div>
                     <Header />
                         <Switch>
                             <Route exact path="/home" render={() => <Home recipes={this.state.recipes} onClick={ recipeId => this.onRecipeSelect(recipeId)}/>} />
                             {/*<RecipeInfo recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}/>*/}
                             {/*<Route path="/home/:recipeId" render={(props) => <RecipeWithId {...props} recipes={this.props.recipes} />} />*/}
                             {/*<Route path="/home/:recipeId" render={() => <RecipeWithId recipes={this.props.recipes} />} />*/}
                             <Route path="/home/:recipeId" render={(props) => <RecipeWithId {...props} />} />
                             <Route exact path="/contactus" component={Contact} />
                             <Redirect to="/home" />
                         </Switch>
                     <Footer />
                 </div>
            );
        };
    }

   /* render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        

        return (
            <div>
                <div className="container"><h1>Hello</h1></div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}*/

export default Main;
