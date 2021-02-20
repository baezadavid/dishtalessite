import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { RECIPES } from '../shared/recipes';
//import { Navbar, NavbarBrand} from "reactstrap";
import RecipeInfo from './RecipeInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BLOGS } from '../shared/blogs';
import Blog from "./BlogComponent";
import BlogInfo from "./BlogInfoComponent";

class Main extends Component {
        constructor(props) {
            super(props);
            this.state ={
                recipes: RECIPES,
                selectedRecipe: null,
                blogs: BLOGS,
                selectedBlog: null
            };
        }

        onRecipeSelect(recipeId) {
            this.setState({selectedRecipe: recipeId});
        }

        onBlogSelect(blogId) {
            this.setState({selectedBlog: blogId});
        }

       

        render() {

            const RecipeWithId = ({match}) => {
                console.log(this.state.recipes);
                return (
                    <RecipeInfo recipe={this.state.recipes.filter(recipe=> recipe.id === +match.params.recipeId)[0]} />
                        /*directions={this.state.directions.filter(direction => direction.recipeId === +match.params.recipeId)}*/
                    
                );
            }

            const BlogWithId = ({match}) => {
                console.log(this.state.blogs);
                return (
                    <BlogInfo blog={this.state.blogs.filter(blog => blog.id === +match.params.blogId)[0]} />
                );
            }

            return (
                 <div>
                     <Header />
                         <Switch>
                             <Route exact path="/home" render={() => <Home recipes={this.state.recipes} onClick={ recipeId => this.onRecipeSelect(recipeId)}/>} />
                             <Route exact path="/blog" render={() => <Blog blogs={this.state.blogs} onClick={ blogId => this.onBlogSelect(blogId)}/>} />
                             {/*<RecipeInfo recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}/>*/}
                             {/*<Route path="/home/:recipeId" render={(props) => <RecipeWithId {...props} recipes={this.props.recipes} />} />*/}
                             {/*<Route path="/home/:recipeId" render={() => <RecipeWithId recipes={this.props.recipes} />} />*/}
                             <Route path="/home/:recipeId" render={(props) => <RecipeWithId {...props} />} />
                             <Route path="/blog/:blogId" render={(props) => <BlogWithId {...props} />} />
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
