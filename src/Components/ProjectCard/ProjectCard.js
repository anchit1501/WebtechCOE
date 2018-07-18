import React,{Component} from 'react';
import './ProjectCard.css';

class ProjectCard extends Component{
    render(){
        return(<div class="projectcard">
        <div class="thumbnail"><img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
        <div class="right">
          <h1>About The Project</h1>
          <div class="separator"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada malesuada felis, vitae feugiat tellus. Duis viverra vel quam sagittis gravida. Vestibulum lorem lacus, venenatis vel arcu ut, hendrerit faucibus leo. Morbi condimentum maximus dolor laoreet convallis. Ut hendrerit, elit vitae laoreet viverra, lacus neque aliquet dui, vel aliquet dui risus nec enim.</p>
        </div>
        <h5>Project Name</h5>
        <div class="fab"><i class="fa fa-arrow-right fa-3x"> </i></div>
      </div>);
    }
}

export default ProjectCard;