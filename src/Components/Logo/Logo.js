import React,{Component} from 'react';
import logo from '../../images/mindtree.png';
import './Logo.css';
import CountUp from 'react-countup';
class Logo extends Component{
    render(){
        return(
            <div className="col">
            <div className="row">
              <div className="row logo-section">
              <h1>Webtech COE</h1>
              
              </div>
              </div>
              <div className="row">
              <div className="col-sm-1 logo-section">
              <div className="row">
              <h1><CountUp start={0} end={10} duration={3} />
              </h1><h1>+</h1>
              </div>
              <hr/>
              <div className="row" style={{"paddingTop":"15px"}}>
              <h6>Years of Web<br />Technologies<br />Experience</h6>
              </div>              
              </div>

              <div className="col-sm-1 logo-section">
              <div className="row">
              <h1><CountUp start={0} end={200} duration={3} /></h1><h1>+</h1>
              </div>
              <hr/>
              <div className="row" style={{"paddingTop":"15px"}}>
              <h6>Projects<br />Delivered</h6>
              </div>              
              </div>
              

              <div className="col-sm-1 logo-section">
              <div className="row">
              <h1><CountUp start={0} end={325} duration={3} /></h1><h1>+</h1>
              </div>
              <hr/>
              <div className="row" style={{"paddingTop":"15px"}}>
              <h6>Core Web<br />Technologies<br />Team Members</h6>
              </div>              
              </div>
              <div className="col-sm-1 logo-section">
              <div className="row">
              <h1><CountUp start={0} end={40} duration={3} /></h1><h1>+</h1>
              </div>
              <hr/>
              <div className="row" style={{"paddingTop":"15px"}}>
              <h6>Active<br />Customers</h6>
              </div>              
              </div>

              </div>
              </div>  
             
        );

    }
}

export default Logo;