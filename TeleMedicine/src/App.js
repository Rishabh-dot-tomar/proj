import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" name="Main Page" component={Main} />
                        <Route exact path="/login" name="Login Page" component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
