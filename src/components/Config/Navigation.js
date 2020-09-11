import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Navigation'
import User from '../User/User'
import UserSettings from '../User Settings/UserSettings'
class Navigation extends Component {
    render() {
        return (
            <Router>
                <Route path='/login' component={Login} />
                <Route path='/home' component={Home} />
                <Route exact path="/general/user" component={User} />
                <Route path='/usersettings' component={UserSettings} />
                {/* <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />*/}
                <Redirect to='/login' />
            </Router>
        )
    }
}

export default Navigation