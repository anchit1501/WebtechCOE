import React,{Component} from 'react';
import ReactDom from 'react-dom';
// import './index.css';
// import * from 'jquery';
import Landing from './Components/landing';
import Navbar from './Components/navbar';
// import registerServiceWorker from './registerServiceWorker';



class App extends Component {
    render() {
      return (
        <div className="App">
        
        
        <Navbar />
        <Landing />
        </div>
      );
    }
  }
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDom.render( <App /> , document.getElementById('root'));
