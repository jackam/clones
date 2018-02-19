/*
 * Main.js
 */

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var Route = ReactRouterDOM.Route;
var Switch = ReactRouterDOM.Switch;

var GettingStarted = require('./GettingStarted');
var Home = require('./Home');
var Overview = require('./Overview');

class Main extends React.Component {
    render() {
        return (
            <section className='main'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/overview' component={Overview} />
                    <Route path='/gettingstarted' component={GettingStarted} />
                </Switch>
            </section>
        );
    }
}

module.exports = Main;
