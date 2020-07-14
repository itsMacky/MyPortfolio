import React from 'react';
import Typist from 'react-typist';
import '../App.css';
import { Grid, Cell } from 'react-mdl';

function Resume(){
    return(
        <div>
            <div>
            <Typist className="typeist">
                 Welcome To Resume.
            </Typist>
            </div>
            <div>
            <Grid>
                <Cell className="resume-cell-1" col={4}>
                    <h3 style={{paddingTop:'1em'}}>Makrand Lokhande</h3>
                    <h4>Programmer | Coder | Developer</h4>
                    <hr style={{borderTop:'3px solid ',width:'50%',margin:'auto'}}/>
                    <p>
                    The first 90 percent of the code accounts for the first 90 percent of the development time…The remaining 10 percent of the code accounts for the other 90 percent of the development time.
                    </p>
                    
                </Cell>
                <Cell className="resume-cell-2" col={8}>
                    <h4>MAKRAND ARVIND LOKHANDE</h4>
                    <p>
                        At Post Hingoli, 431 513
                        <br/>
                        9545994082
                        <br/>
                        makrand586@gmail.com
            
                     </p>
                     <hr/>
                    <h4>CAREER OBJECTIVE</h4>
                    <p>
                         seeking a position at XYZ Company Where I Can maximize my 10+ years of management,quality assurance,program development,and training experience.
                    </p>
                    <hr/>
                    <h4>EDUCATION</h4> 
                    <p>
                        <h5>G.H.Raisoni Institute Of Engineering And Technology , Pune</h5>
                        Computer Engineering (Pursuing)<br/> 
                        2022<br/>
                        <h5>K. Radhatai Musle Jr.College, Hingoli</h5>
                        with Computer Science<br/>
                        65.54%<br/>
                        2018
                        <h5>Sacred Heart English High School,Hingoli</h5>
                        10th<br/>
                        75.70%<br/>
                        2016

                    </p>
                    <hr/> 
                    <h4>TECHNICAL SKILLS</h4>
                    <p>Programming Language: C , C++ , Python, Html, Css, ReactJs, Flutter, Database:MYsql</p>
                    <hr/>
                    <h4>INTERESTS</h4>
                    <p>
                        Software Development<br/>
                        Web Development<br/>
                        Machine Learning and Artificial Intelligence
                    </p>
                    <hr/>
                    <h4>ACTIVITIES</h4>
                    <p>Active Participation in Organized event</p>
                
                    <hr/>

                    <h4>PERSONAL PPROFILE</h4>
                    <p>
                        Date of Birth : 21/02/2000<br/>
                        Marital Status : Unmarried<br/>
                        Nationality : Indian<br/>
                        Known Language : English , Hindi and Marathi <br/>
                        Hobby : Playing Guitar, Listening to Music, Reading Articles on Technical Stuffs.
                    </p> 
                </Cell>
            </Grid>
            </div>
        </div>
    )
}

export default Resume