import React from 'react';
import './index.css'



const PageSixComponent = () => {
  return (
    <>
      <div class="page6Body">
        <h2 class="headSix">
          We aspire to be one of the most loved companies in the world
        </h2>
        <div class="sect6para">
          <div class="p6cards">
            <div className="imageStyle">
              <img
                className="cardImage"
                src={require('../images/culture.PNG')}
              ></img>
            </div>
            <h4 className="cardText">Culture </h4>
            <p className="cardDescription">
              A culture that supports high-<br></br>quality work, joy and pride
              in that<br></br> work, speed to execution, and<br></br> intense
              customer focus.
            </p>
          </div>
          <div class="p6cards">
            <div>
              <img class="icons6" src={require('../images/diversity.PNG')}></img>
            </div>
            <h4 className="cardText">Diversity </h4>
            <p className="cardDescription">
              Full-spectrum diversity, equity, and inclusion are key priorities
              for us.
            </p>
          </div>
          <div class="p6cards">
            <div>
              <img
                class="icons6"
                src={require('../images/experience.PNG')}
              ></img>
            </div>
            <h4 className="cardText">Experience </h4>
            <p className="cardDescription">
              Focus on enhancing the team experience by strengthening our
              managers leadership capabilities.
            </p>
          </div>
          <div class="p6cards">
            <div>
              <img class="icons6" src={require('../images/team.PNG')}></img>
            </div>
            <h4 className="cardText">Team </h4>
            <p className="cardDescription">
              4,000 employees and growing in offices across India, US, Europe,
              and Australia.
            </p>
          </div>
        </div>
      </div>
      <div className="freshDiv">
        <button class="btn6Icon">SEE LIFE AT FRESHWORKS</button>
      </div>
    </>
  );
};

export default PageSixComponent;
