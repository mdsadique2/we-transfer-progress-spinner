import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Demo from 'Pages/Demo'
import Error404 from 'Pages/404'

import App  from '../App';


export default class RouterComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/demo" />)}/>
                        <Route exact path="/demo" render={() => (<Demo/>)}/>
                        <Route exact path="/404" render={() => (<Error404/>)}/>
                        <Route path="*" render={() => (<Redirect to="/404" />)}/>
                    </Switch>
                </ App>
            </Router>
        );
    }
}
