"use strict";

var React = require('react');

var TextSample = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>TextBox</h1>
                <p>Description.</p> 
            </div>
        );
    }
});

var DateSample = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Datepicker</h1>
                <p>Description.</p> 
            </div>
        );
    }
});

module.exports = {
    text: TextSample,
    date: DateSample
};