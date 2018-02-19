/*
 * Navbar.js
 */

var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
    render() {
        return (
            <ul className='nav-bar'>
                <li><i className='glyphicon glyphicon-chevron-right' /><NavLink to='/overview'>Overview</NavLink></li>
                <li><i className='glyphicon glyphicon-fast-forward' /><NavLink to='/gettingstarted'>Get Started</NavLink></li>
                <li className='nav-break'></li>
                <li><i className='glyphicon glyphicon-play' /><NavLink to='/tutorials'>Tutorials</NavLink></li>
                <li><i className='glyphicon glyphicon-step-forward' /><NavLink to='/docs'>Docs</NavLink></li>
                <li><i className='glyphicon glyphicon-fast-forward' /><NavLink to='/resources'>Resources</NavLink></li>
                <li><i className='glyphicon glyphicon-arrow-right' /><NavLink to='/makinggwtbetter'>Making GWT Better</NavLink></li>
                <li><i className='glyphicon glyphicon-transfer' /><NavLink to='/terms'>Terms</NavLink></li>
                <li className='nav-break'></li>
                <li><button className='reference-btn' type='button'><i className='glyphicon glyphicon-download' />Download</button></li>
                <li><button className='reference-btn' type='button'><i className='glyphicon glyphicon-floppy-save' />Java Doc</button></li>
            </ul>
        );
    }
}

module.exports = Navbar;
