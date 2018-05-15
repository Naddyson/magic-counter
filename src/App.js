import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppProtected from './components/AppProtected';
import LoginPage from './components/LoginPage'
import { BrowserRouter, IndexRoute, Route, Switch,Redirect, withRouter } from 'react-router-dom'
/*
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'


import { firebaseAuth } from '../config/constants'
//

import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { setUserStatus } from '../actions/auth'
*/




function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to="/auth"/>}
        />
    )
}

function PublicRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to="/book"/>}
        />
    )
}



class App extends React.Component {
    state = {
        authed: true,
        loading: true,
        bool: true

    }
    /*GetAuthState = () => {
    new Promise ( (resolve,reject) => {
        firebaseAuth().onAuthStateChanged((user) => {
        console.log(user)
        if (user) {
          resolve()
        }
        else {
          reject()
          }
          })
        }).then(
          resolve => {
           this.props.setUserStatus(true)
          },
          reject => {
            this.props.setUserStatus(false)
          }

        )
        if (!this.state.authed) {
            this.props.history.push('/book')
        }
    }
    componentDidMount () {
        this.GetAuthState()
    }


    componentWillUpdate(){
        this.GetAuthState()

    }
    componentWillUnmount () {
        this.GetAuthState()
    }*/

    render(){
        return(

            <Switch>
                <PublicRoute authed={ this.state.authed } path="/auth" component={LoginPage}/>
                <PrivateRoute authed={ this.state.authed } path="/" component={AppProtected}/>
            </Switch>

        )
    }
}

/*function mapStateToProps(state){
    return {
        authed: state.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return {

        setUserStatus: (bool) => {
            dispatch(setUserStatus(bool))
        }
    }
}*/

/*

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));*/

export default App;