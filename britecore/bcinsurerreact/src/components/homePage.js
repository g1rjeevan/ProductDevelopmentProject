"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>BriteCore Insurer Adminstration</h1>
                <p>We provide various types of insurance based on the customer need.</p>
                <div id="about"/>
            </div>
        );
    }
});

var Header = React.createClass({

    render: function(){

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div class="navbar navbar-inverse navbar-fixed-top">
                    <div class="navbar-inner">
                        <a href="/" className="navbar-brand" style={{width: '85%', height: 'auto'}}>
                            <img style={{width: '18%', height: 'auto', display: 'block'}} src="images/britecore_logo.png" />
                        </a>
                        <ul className="nav navbar-nav " style={{width: '15%', height: 'auto'}}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#about">About</a></li>
                        </ul>
                    </div>
                </div>
                    
                </div>
            </nav>
        );

    }

});

module.exports = {
    Home: Home,
    Header: Header
};