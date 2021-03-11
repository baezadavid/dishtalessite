import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
//import { RECIPES } from './shared/recipes';
//import Home from './components/HomeComponent';
//import { Navbar, NavbarBrand} from "reactstrap";
import './App.css';

const store = ConfigureStore();

class App extends Component {
    /*constructor(props) {
        super(props);
        this.state ={
            recipes: RECIPES
        };
    }*/
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    };
}

export default App;
