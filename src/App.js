import React, { Component } from "react";
import Login from './Components/Login/login.jsx';

import "./App.css";
import "./Components/Login/style.scss"


class App extends Component {  

    render() {
       
        return (
            <div className="App">
                <div className="login">
                    <div className="container">
                        <Login/>
                    </div>
                </div>
                
            </div>

        )
    }
};


export default App;


