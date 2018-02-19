/*
 * Home.js
 */

var React = require('react');

class Home extends React.Component {
    render() {
        var colors = {
            background: {
                light: '#f2f2f2', 
                themed: '#f83535'
            },
            font: {
                dark: '#000000',
                light: '#ffffff' 
            }
        };
        return (
            <div className='home'>
                <div className='container' style={{backgroundColor: colors.background.light}}>
                    <img className='logo-big' src={require('../images/logoBig.png')} />
                    <h1 style={{color: colors.font.dark}}>
                        Productivity<br />
                        for developers<br />
                        performance for users
                    </h1>
                    <p>GWT is used by many products at Google, including Google AdWords and Google Wallet. It's open source, completely free, and used by thousands of enthusiastic developers around the world.</p>     
                </div>
                <div className='container' style={{backgroundColor: colors.background.themed}}>
                    <h1>
                        <strong style={{color: colors.font.dark, fontSize: '102px'}}>GWT</strong><br />
                        <span style={{color: colors.font.light}}>pronounced {'<<gwit>>'}</span>
                    </h1>
                    <p style={{color: colors.font.light}}>
GWT is the official open source project for GWT releases 2.5 and onwards.<br /><br />This site houses links to the documentation, source code repository, issues list and information related to GWT roadmap and release.<br /><br />It is intended for developers interested in contributing to GWT, and for keeping people informed on new and upcoming changes to GWT, GWT related events and other news.
                    </p>
                </div>
                <div className='container' style={{backgroundColor: colors.background.light}}>
                    <h1 className='thumbnail-header' style={{color: colors.font.dark}}>Let's begin</h1>
                    <div className='thumbnail-row'>
                        <div className='thumbnail'>
                            <div><i className='glyphicon glyphicon-fullscreen'></i></div>
                            <h2>Learn About GWT</h2>
                            <p>The features and tools it offers, and how you can quickly develop performance AJAX applications across all major browsers.</p>
                        </div>
                        <div className='thumbnail'>
                            <div><i className='glyphicon glyphicon-export'></i></div>
                            <h2>Download</h2>
                            <p>Download and install the tools in GWT, including the SK, SPeed Tracer, and the Google Plugin for Eclipse</p>
                        </div>
                        <div className='thumbnail'>
                            <div><i className='glyphicon glyphicon-log-in'></i></div>
                            <h2>Get Started</h2>
                            <p>Walk through the first steps needed to get a web application up and running.</p>
                        </div>
                        <div className='thumbnail'>
                            <div><i className='glyphicon glyphicon-random'></i></div>
                            <h2>DOCS</h2>
                            <p>Everything you need to know about how to use GWT, and witness the power of Google's Java-FU.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home;

