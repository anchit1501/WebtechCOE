import  React,{Component} from 'react';
// import './card.css';

class Card extends Component{

    render(){
        return(
         

<div class="box gallery">
	<div class="card1">
    <div class="background">
      <div class="column col1"></div>
      <div class="column col2"></div>
      <div class="column col3"></div>
      <div class="column col4"></div>
      <div class="column col5"></div>
    </div>  
    <a href="#" class="overlay">
    </a>
    <a href="#">
      <i class="fa fa-camera-retro"></i>
    </a>
    <a class="thumb" href="#">
      <div class="info">
        <h2>
          <a href="#">I build websites with passion for code and I specialise in HTML, CSS and JavaScript
          </a>
        </h2>
        <div class="foot">
          <i class="line"></i>
          <span class="date">18 February 2015</span>
          <a href="#" target="_blank" class="social">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" target="_blank" class="social">
					<i class="fa fa-twitter"></i>
          </a>
        </div>
      </div>
      </a>
</div>
</div>


        );
    }

}

export default Card;