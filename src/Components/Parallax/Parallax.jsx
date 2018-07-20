import React, { Component } from 'react';
import './Parallax.css';
import layer_0 from '../../images/layer_0.png';
import layer_1 from '../../images/layer_1.png';
import layer_2 from '../../images/layer_2.png';
import layer_3 from '../../images/layer_3.png';
import layer_4 from '../../images/layer_4.png';
import layer_5 from '../../images/layer_5.png';
import layer_6 from '../../images/layer_6.png';

class Parallax extends Component {
    render() {
        return (<div class="parallax">
            <div class="parallax__layer parallax__layer__0">
                <img src={layer_0} />
            </div>
            <div class="parallax__layer parallax__layer__1">
                <img src={layer_1} />
            </div>
            <div class="parallax__layer parallax__layer__2">
                <img src={layer_2} />
            </div>
            <div class="parallax__layer parallax__layer__3">
                <img src={layer_3} />
            </div>
            <div class="parallax__layer parallax__layer__4">
                <img src={layer_4} />
            </div>
            <div class="parallax__layer parallax__layer__5">
                <img src={layer_5} />
            </div>
            <div class="parallax__layer parallax__layer__6">
                <img src={layer_6} />
            </div>


            <div class="parallax__cover">

                <div class="row content" style={{ "width": "100vw","marginTop":"20px" }}>

                    <div class="col-sm-6">
                        <div class="blog-card spring-fever">
                            <div class="color-overlay"> <div class="card-info">
                                <a href="https://digital-knowledgehub.azurewebsites.net/" style={{"color":"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </a></div></div>
                        </div>
                    </div>

                    <div class="col-sm-6">

                        <h6 className="project-name">Knowledeghub</h6>

                    </div>
                </div>


                <div class="row content" style={{ "width": "100vw","marginTop":"20px" }}>

                    
                    <div class="col-sm-6">

                        <h6 className="project-name">Knowledeghub</h6>

                    </div>
                    <div class="col-sm-6">
                    <div class="blog-card spring-fever">
                        <div class="color-overlay"> <div class="card-info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </div></div>
                    </div>
                </div>


            </div>


        </div>
        </div >
        );
    }
}

export default Parallax;