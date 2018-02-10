$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage').Home;
var Header = require('./components/homePage').Header;
var About = require('./components/about/aboutPage');
var Text = require('./components/dataType').text;
var DatePiker = require('./components/dataType').date;
var axios = require('axios');
var cors = require('cors');

(function(win){
    "use strict";
    
    var App = React.createClass({

        render: function(){
            var Child;
    
            
            this.props.route.forEach(element => {
                
                console.log(element);
            });
            switch(element){
                case 'about': Child = About; break;
                default: Child = Home;
            }
    
            return (
                <div>
                    <Header/>
                    <Child/>
                    <Text/>
                    <DatePiker/>
                </div>
            );
    
        }
    
    });


    
    function render(){

        axios.get('http://127.0.0.1:8000/risks/').then(function (resp){
            console.log(resp.data);
        });
        var route = window.location.hash.substr(1);
        React.render(<App route = {route} />, document.getElementById('app'));
    }
    
    // React.render(< Home />, document.getElementById('app'));
    // React.render(< About />, document.getElementById('about'));
    
    window.addEventListener('hashchange', render);
    render();

})(window);
