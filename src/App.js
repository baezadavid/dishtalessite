import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
//import { RECIPES } from './shared/recipes';
//import Home from './components/HomeComponent';
//import { Navbar, NavbarBrand} from "reactstrap";
import './App.css';

class App extends Component {
    /*constructor(props) {
        super(props);
        this.state ={
            recipes: RECIPES
        };
    }*/
    render() {
        return (
            <BrowserRouter>
                 <div className="App">

                     <Main />
                {/* <Navbar dark color="primary">
                     <div className="container">
                         <NavbarBrand href="/">Dish Tales</NavbarBrand>
                     </div>
                 </Navbar>
                 <Home recipes={this.state.recipes}/>*/}
                 </div>
            </BrowserRouter>
        );
    };
}

export default App;
