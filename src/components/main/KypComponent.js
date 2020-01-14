import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'

import HeaderComponent from './HeaderComponent'
//import FooterComponent from './FooterComponent'

import LoginComponent from '../auth/LoginComponent'
import RegisterComponent from '../auth/RegisterComponent'
import LogoutComponent from '../auth/LogoutComponent'

import MainPageComponent from '../app/MainPageComponent'

export class KypComponent extends Component {
    render() {
        const URL = '/know-your-protein-client';
        return (
            <div>
                <Router>
                    <>
                      <Sticky>
                          <HeaderComponent />
                      </Sticky>
                      <Switch>
                        <Route path={`${URL}/`} exact component={MainPageComponent} />
                        <Route path={`${URL}/login`} component={LoginComponent} />
                        <Route path={`${URL}/register`} component={RegisterComponent} />
                        <Route path={`${URL}/logout`} component={LogoutComponent} />
                      </Switch>
                      {/* <FooterComponent /> */}
                    </>
                </Router>
            </div>
        )
    }
}

export default KypComponent
