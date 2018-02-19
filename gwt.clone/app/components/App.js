/*
 * App.js
 */

var React = require('react');

var Main = require('./Main');
var Sidebar = require('./Sidebar');

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Sidebar />
                <Main />
            </div>
        );
    }
}

module.exports = App;
