import React from "react";
import Typist from 'react-typist';
import { Grid } from "react-mdl";
import mak from '../Images/mak.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Conatact(){
    return(
        <div>
            <div>
            <Typist className="typeist">
                 Welcome To Contacts.
            </Typist>
            </div>
            <div>
                <Grid className="contact-grid">
                    <cell col={6} className="cg">
                        <h2>Makrand Lokhande</h2>
                        
                        <img  src={mak} alt="MyImage" width="250" height="250" style={{borderRadius:10, margin:10}} className="cc"></img>
                        
                        <p>
                            Myself a Tech-Enthusiastic, Love to explore 
                            the technology and its working and to code. A Python
                            Programmer, A Flutter Developer, A Web-Developer. Also have keen intrest in Learning new things.

                        </p>

                    </cell>
                    <cell col={6} className="cg2">
                        <h2>Wanna Get In Touch ?</h2>
                        <hr></hr>
                        <div className="table">
                        <table>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </td>
                                <td>
                                    makrand586@gmail.com
                                </td>
                                
                            </tr>
                            <tr>
                            <td className="fonnt">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </td>
                                <td>
                                    <a href="https://www.facebook.com/makrand.lokhande.5" target="_blank">
                                    From FaceBook.
                                    </a>
                                </td>
                            </tr>

                        </table>
                        </div>

                    </cell>
                </Grid>
                
            </div>
        </div>
    )
}

export default Conatact