import React from 'react';

function Skill(){
    return(
        <div>
            <div>
            <h2 className="subtitle">Skills</h2>
        <div className="divider-s"></div>
        <div className="container">
          <h4>HTML/CSS</h4>
          <div className="progress">
          <div className="prg" style={{width:"90%"}}></div>
          </div>

          <h4>Python</h4>
          <div className="progress">
          <div className="prg" style={{width:"60%"}}></div>
          </div>

          <h4>Flutter</h4>
          <div className="progress">
          <div className="prg" style={{width:"50%"}}></div>
          </div>

          <h4>React JS</h4>
          <div className="progress">
          <div className="prg" style={{width:"70%"}}></div>
          </div>

          <h4>C</h4>
          <div className="progress">
            <div className="prg" style={{width:"50%"}}></div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default Skill