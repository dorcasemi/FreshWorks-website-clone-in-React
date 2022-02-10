import React from 'react';
import './index.css'
import icon1 from './../images/Icon1.PNG';
import icon2 from './../images/Icon2.PNG';
import icon3 from './../images/Icon3.PNG';
import icon4 from './../images/Icon4.PNG';
import EastIcon from '@mui/icons-material/East';


const PageThreeComponent = () => {
  return (
    <>
      <div class="page3Body">
        <div class="sect3para">
          <h2 class="headOne"> Frictionless, simple, easy</h2>
          <p class="ptag2">
            Freshworks makes it fast and easy for businesses to delight their
            customers and employees.<br></br>
            we take a fresh approach to how businesses discover, engage with,
            and realize value from software throughout their journey.
          </p>
        </div>

        <section class="iconSect">
          <div class="cards">
            <div>
              <img class="icons" src={icon1}></img>
            </div>
            <h4 className="ptagText">Get up and running with no barriers</h4>
            <p class="Ptag3">
              Try or purchase our software directly from our website,<br></br>{' '}
              and onboard in a matter of days, not months.
            </p>
            <div className="cardRowStart">
              <p class="btnIcon">Start free trial</p>
              <EastIcon
                style={{
                  alignItems: 'center',
                  color: '#e70c0c',
                  width: 15,
                  height: 15,
                  marginLeft: -10,
                }}
              />
            </div>
          </div>

          <div class="cards">
            <div>
              <img class="icons" src={icon2}></img>
            </div>
            <h4 className="ptagText">Choose your pricing plan </h4>
            <p class="Ptag3">
              Our pricing plans are designed for modern business use<br></br>{' '}
              cases and affordable for organizations of all sizes.
            </p>
            <div className="cardRowStart">
              <p class="btnIcon">See pricing</p>
              <EastIcon
                style={{
                  alignItems: 'center',
                  color: '#e70c0c',
                  width: 15,
                  height: 15,
                  marginLeft: -10,
                }}
              />
            </div>
          </div>

          <div class="cards">
            <div>
              <img class="icons" src={icon3}></img>
            </div>
            <h4 className="ptagText"> Choose your pricing plan</h4>
            <p class="Ptag3">
              Our pricing plans are designed for modern business use<br></br>{' '}
              cases and affordable for organizations of all sizes.
            </p>
            <div className="cardRowStart">
              <p class="btnIcon">See pricing</p>
              <EastIcon
                style={{
                  alignItems: 'center',
                  color: '#e70c0c',
                  width: 15,
                  height: 15,
                  marginLeft: -10,
                }}
              />
            </div>
          </div>

          <div class="cards">
            <div>
              <img class="icons" src={icon4}></img>
            </div>
            <h4 className="ptagText">Create value, fast </h4>
            <p class="Ptag3">
              Accelerate your teams productivity and efficiency with<br></br>{' '}
              modern automation and collaboration tools,<br></br> to get
              tangible results in no time.
            </p>
            <div className="cardRowStart">
              <p class="btnIcon">Learn how</p>
              <EastIcon
                style={{
                  alignItems: 'center',
                  color: '#e70c0c',
                  width: 15,
                  height: 15,
                  marginLeft: -10,
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageThreeComponent;
