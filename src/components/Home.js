import React from 'react';
import '../App.css';
import Skill from '../components/Skills';
import Typist from 'react-typist';
import mak from '../Images/mak.jpg';
import maksign from '../Images/maksign.png'
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Home(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="home-grid"> 
            <Cell col={12}>
             <div className="navigation">
    

            </div>
            
            <div>
            <Typist className="typeist">
                 Welcome To My Home Page
                 </Typist>
            </div>
            
            <div>
            <Typist className="typeist">
                 <Typist.Delay ms={2000} />
                 <span>Myself Makrand Lokhande</span>
                 <Typist.Backspace count={16} delay={300} />
                 <span>Web Developer.</span>
                 <Typist.Backspace count={14} delay={300} />
                 <span>Flutter Developer</span>


            </Typist>
            </div>

            <div>
                
            </div>

            <div className="cent">
                <img className="myimg" src={mak} alt="MyImage" width="200" height="200" ></img>
            </div>
            <div className="cennt">
            <img  src={maksign} alt="Mysign" width="200" ></img>
            </div>

            <div className="ban">
                <h1>Developer</h1>
                <hr/>
                <p>
                    <h4>Web Dev | Python Programmer | Flutter Dev  </h4>
                </p>
                <div className="icons">
                    <span >
                        <a href="https://www.github.com/itsmacky" target="_blank">
                        <FontAwesomeIcon  icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </span>
                    <span>
                    <a href="https://www.instagram.com/_p_r_o_t_o_n_" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a>
                    </span>
                    <span>
                    <a href="https://www.facebook.com/makrand.lokhande.5" target="_blank">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                    </span>
                    <span>
                    <a href="" target="_blank">
                        <FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon>
                        </a>
                    </span>
                    <span>
                    <a href="" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                    </span>
                </div>
            </div>

            <div>
            <Skill/> 
            </div>
            </Cell>
            </Grid>
        </div> 
    )
}

export default Home