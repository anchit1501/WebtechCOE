import  React,{Component} from 'react';
import './card.css';
import botbg from '../../images/chatbot.png';

class CardBot extends Component{

    render(){
        return(
         

<div class="box gallery">
	<div class="card1">
    <div class="background">
    <img src={botbg} className="portrait" />
    </div>  
    
    
    <a class="thumb" href="#">
      <div class="info-bot">
        <h2>
          <a href="#">Hello I am Talkbot
          </a>
        </h2>
        
      </div>
      </a>
</div>
</div>


        );
    }

}

export default CardBot;