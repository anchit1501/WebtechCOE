import React,{Component} from 'react';
import './navbar.css';

class Navbar extends Component{
    componentDidMount(){
       var toggle = document.querySelectorAll(".toggle")[0];
var nav = document.querySelectorAll("nav")[0];
var toggle_open_text = 'Let\'s Talk';
var toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);
    }
    render(){
        
        return(<nav class="top-right open">
	
        <a class="disc l2">
            <div>Audio</div>
        </a>
        <a class="disc l3">
            <div>Video</div>
        </a>
        <a class="disc l4">
            <div>Chat</div>
        </a>
        <a class="disc l5 toggle">
            Let's Talk
        </a>
    </nav>);
    }
}
export default Navbar;