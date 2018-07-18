import React,{Component} from 'react';
import './Parallax.css';

class Parallax extends Component{
    render(){
        return(<div class="parallax">
        <div class="parallax__layer parallax__layer__0">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_0.png" />
        </div>
        <div class="parallax__layer parallax__layer__1">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_1.png" />
        </div>
        <div class="parallax__layer parallax__layer__2">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_2.png" />
        </div>
        <div class="parallax__layer parallax__layer__3">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_3.png" />
        </div>
        <div class="parallax__layer parallax__layer__4">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_4.png" />
        </div>
        <div class="parallax__layer parallax__layer__5">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_5.png" />
        </div>
        <div class="parallax__layer parallax__layer__6">
            <img src="https://sam.beckham.io/images/articles/firewatch/layer_6.png" />
        </div>
        <div class="parallax__cover">
        <div class="row content" style={{"width":"100vw"}}>
  <div class="col-sm-6">
  <div class="blog-card spring-fever">
  <div class="title-content">
    <h3>SPRING FEVER</h3>
    <hr />
    <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
  </div>
  <div class="card-info">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
  </div>
  <div class="utility-info">
    <ul class="utility-list">
      <li class="comments">12</li>
      <li class="date">03.12.2015</li>
    </ul>
  </div>
  
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
  </div>
  <div class="col-sm-6">

  <h6 style={{"marginTop":"100px", "marginLeft":"50px","fontSize":"50px","paddingTop":"150px","verticalAlign":"center"}}>TEST PROJECT</h6>
    
  </div>
</div>
<div class="row content" style={{"width":"100vw"}}>
<div class="col-sm-6">

  <h6 style={{"marginTop":"100px", "marginLeft":"50px","fontSize":"50px","paddingTop":"150px","verticalAlign":"center"}}>TEST PROJECT</h6>
    
  </div>
  <div class="col-sm-6">
  <div class="blog-card spring-fever">
  <div class="title-content">
    <h3>SPRING FEVER</h3>
    <hr />
    <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
  </div>
  <div class="card-info">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
  </div>
  <div class="utility-info">
    <ul class="utility-list">
      <li class="comments">12</li>
      <li class="date">03.12.2015</li>
    </ul>
  </div>
  
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
  </div>
  
</div>


        </div>
        </div>
    );
    }
}

export default Parallax;