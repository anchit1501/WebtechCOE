import React, { Component } from 'react';
import './landing.css';
import Card from '../Card/card';
import CardBot from '../Card/cardBot'
// import ProjectCard from '../ProjectCard/ProjectCard';
import Parallax from '../Parallax/Parallax';
import Logo from '../Logo/Logo';
import botbg from '../../images/chatbot.png';
import Solution from '../../images/solution.png';


class Landing extends Component {




  render() {
    return (
      <div id="t1">
        <div id="t2">
          <div id="t3">
            <div id="t4">
              <div id="t5">
                <ul id="menu">
                  <a href="#t1"><li className="icon fa fa-bolt" id="uno" ></li></a>
                  <a href="#t2"><li className="icon fa fa-keyboard-o" id="dos"></li></a>
                  <a href="#t3"><li className="icon fa fa-rocket" id="tres"></li></a>
                  <a href="#t4"><li className="icon fa fa-dribbble" id="cuatro"></li></a>
                  <a href="#t5"><li className="icon fa fa-plus-circle" id="cinco"></li></a>
                </ul>
                <div className="page" id="p1">
                  <div className='row'>
                    <div className="col-sm-8">
                      <Logo />
                    </div>
                  </div>
                  <div className="row" style={{"marginTop":"100px"}}>
                    
                    <div className="col-sm-2">
                      <CardBot back={Solution} />
                    </div>
                    <div className="col-sm-2">
                      <CardBot back={botbg}/>
                    </div><div className="col-sm-2">
                      <CardBot back={botbg}/>
                    </div>
                    <div className="col-sm-2">
                      <CardBot back={botbg}/>
                    </div>
                  </div>

                </div>
                <div className="page" id="p2">
                  <div className="col-sm-3">

                  </div>
                </div>
                <div className="page" id="p3">
                  <Parallax />
                </div>
                <div className="page" id="p4">

                </div>
                <div className="page" id="p5">
                  {/* <Carousel /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    );
  }
}
export default Landing;