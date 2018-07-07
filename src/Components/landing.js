import React,{Component} from 'react';
import '../App.css';
class Landing extends Component{
    render(){   return(
      <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
             <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1"><li className="icon fa fa-bolt" id="uno"></li></a>
                <a href="#t2"><li className="icon fa fa-keyboard-o" id="dos"></li></a>
                <a href="#t3"><li className="icon fa fa-rocket" id="tres"></li></a>
                <a href="#t4"><li className="icon fa fa-dribbble" id="cuatro"></li></a>
                <a href="#t5"><li className="icon fa fa-plus-circle" id="cinco"></li></a>
              </ul>
              <div className="page" id="p1">
                 <section className="icon fa fa-bolt"><span className="title">Bolt</span><span className="hint">Your Content Goes Here<br/> Some More Content That you Want To Add.....</span></section>  
              </div>
              <div className="page" id="p2">
                <section className="icon fa fa-keyboard-o"><span className="title">Type</span></section>
              </div>  
              <div className="page" id="p3">
                <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
              </div>
              <div className="page" id="p4">
                <section className="icon fa fa-dribbble">
                  <span className="title">Dribbble</span>
                  <p className="hint">
                    <a href="https://dribbble.com/albertohartzet" target="_blank">More Content <span className="hint line-trough">More Content</span> Moreee......  ;-P</a>
                  </p>
                  <p className="hint">Made by Webtch COE <a href="http://www.dribbble.com/mrpeters" target="_blank">Mindtree</a></p>
                </section>
              </div> 
              <div className="page" id="p5">
                <section className="icon fa fa-plus-circle">
                  <span className="title">More</span>
                  <p className="hint">
                    <span>For the love of CSS</span><br/>
                    <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
                  </p>
                </section>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
  
  
  );}
}
export default Landing;