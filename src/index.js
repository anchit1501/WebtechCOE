import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';
import Landing from './Components/Landing/landing.js';
import Navbar from './Components/Navbar/navbar';




class App extends Component {
    render() {
      return (
        <div>
       <Navbar />
       <Landing />
        </div>
      );
    }
  }

ReactDom.render( <App /> , document.getElementById('root'));
