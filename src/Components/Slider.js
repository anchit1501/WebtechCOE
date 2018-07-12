import React,{Component} from 'react';
import $ from 'jquery';
import './slider.css';
// import 'https://code.jquery.com/jquery-2.2.4.min.js';


class Carousel extends Component {
  moveToSelected= (element) => {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }
    componentDidMount(){
        
        
          
          // Eventos teclado
          // $(document).keydown(function(e) {
          //   console.log('presses');
          //     switch(e.which) {
          //         case 37: // left
          //         this.moveToSelected('prev');
          //         break;
          
          //         case 39: // right
          //         this.moveToSelected('next');
          //         break;
          
          //         default: return;
          //     }
          //     e.preventDefault();
          // });
          
          $('#carousel div').click(function() {
            var selected = $(this);
          
        
          var next = $(selected).next();
          var prev = $(selected).prev();
          var prevSecond = $(prev).prev();
          var nextSecond = $(next).next();
        
          $(selected).removeClass().addClass("selected");
        
          $(prev).removeClass().addClass("prev");
          $(next).removeClass().addClass("next");
        
          $(nextSecond).removeClass().addClass("nextRightSecond");
          $(prevSecond).removeClass().addClass("prevLeftSecond");
        
          $(nextSecond).nextAll().removeClass().addClass('hideRight');
          $(prevSecond).prevAll().removeClass().addClass('hideLeft');
        
          });
          
          // $('#prev').click(function() {
          //   this.moveToSelected('prev');
          //   console.log('presses2');
          // });
          
          // $('#next').click(function() {
          //   this.moveToSelected('next');
          //   console.log('presses3');
          // });
          
    }
    render(){
        return(
            <main>
        <div id="carousel">

        <div class="hideLeft">
         <img src="https://ih0.redbubble.net/image.349382841.8159/sticker,375x360-bg,ffffff.png"/>
       </div>
 
       <div class="prevLeftSecond" >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpbxqutiz4Hu-1elI9X4wVuGLwbcq1HeEYEQNEMx5jhTAwchu"/>
       </div>
 
       <div class="prev" >
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/200px-Boostrap_logo.svg.png"/>
       </div>
 
       <div class="selected">
         <img src="https://cdn.worldvectorlogo.com/logos/react.svg"/>
       </div>
 
       <div class="next" >
         <img src="https://www.w3schools.com/angular/pic_angular.jpg"/>
       </div>
 
       <div class="nextRightSecond" >
         <img src="https://workwithtech.de/wp-content/uploads/2018/03/Node-JS-01.png"/>
       </div>
 
       <div class="hideRight">
         <img src="https://git-scm.com/images/logos/logomark-orange@2x.png"/>
       </div>
 
     </div>
 
     <div class="buttons">
       
     </div>
     </main>)     ;
    }}

    export default Carousel;