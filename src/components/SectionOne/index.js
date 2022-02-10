import React from 'react';
import './index.css';
import femalePics from './../images/femalePics.png';


const PageOneComponent = () => {
  return (
    <>
      <div class="pageOneBody">
        <section class="textPart">
          <h2 class="pageOneHeader">
            Delight made<br></br>easy
          </h2>
          <p class="pageOneParag">
            We make it fast and easy for your business to delight <br></br>
            customers and employees
          </p>
          <div class="btnSection">
            <button class="btn1"> FREE TRIALS</button>
            <button class="btn2"> CONTACT SALES</button>
          </div>
        </section>
        <div>
          <img src={femalePics} class="femalePicture"></img>
        </div>
        <div class="sBContainer">
          <button class="sideButton">CONTACT SALES </button>
        </div>
      </div>
    </>
  );
};

export default PageOneComponent;
