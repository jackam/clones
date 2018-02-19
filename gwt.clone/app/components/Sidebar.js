/*
 * Sidebar.js
 */

var React = require('react');

var Navbar = require('./Navbar');

class Sidebar extends React.Component {
    render() {
        return (
            <section className='sidebar'>
                <Logo />
                <Navbar />
                <Footer />
            </section>
        );
    }
}

function Footer( props ) {
    return (
        <footer>
            <div><i className='glyphicon glyphicon-italic' /></div>
            <p>Creative Commons Attribution <br />3.0 License</p>
        </footer>
    );
}

function Logo( props ) {
    return (
        <img className='nav-logo-big' src={require('../images/navLogoBig.png')}/>
    );
}

module.exports = Sidebar;
