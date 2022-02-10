import React from 'react';
import './index.css'

const PageFourComponent = () => {
  return (
    <>
      <div class="page4Body">
        <div class="sect4para">
          <h2 class="headfour"> Trusted by 50K+ customers big and small</h2>
          <p class="ptag4">
            We are a leading provider of modern SaaS solutions that solve
            multiple, complex business problems to companies of all sizes.
            Businesses from<br></br> more than 120 countries around the world
            use Freshworks products to delight their customers and employees
            every day.
          </p>
        </div>

        <div class="icon4Sect">
          <div class="batch1">
            <img src={require('./../images/Clogo1.PNG')}></img>
            <img src={require('./../images/Clogo2.PNG')}></img>
            <img src={require('./../images/Clogo3.PNG')}></img>
            <img src={require('./../images/Clogo4.PNG')}></img>
            <img src={require('./../images/Clogo5.PNG')}></img>
            <img src={require('./../images/Clogo6.PNG')}></img>
          </div>

          <div class="batch2">
            <img src={require('./../images/Clogo7.PNG')}></img>
            <img src={require('./../images/Clogo8.PNG')}></img>
            <img src={require('./../images/Clogo9.PNG')}></img>
            <img src={require('./../images/Clogo10.PNG')}></img>
            <img src={require('./../images/Clogo11.PNG')}></img>
            <img src={require('./../images/Clogo12.PNG')}></img>
          </div>
          <div class="batch3">
            <img src={require('./../images/Clogo13.PNG')}></img>
            <img src={require('./../images/Clogo14.PNG')}></img>
            <img src={require('./../images/Clogo15.PNG')}></img>
            <img src={require('./../images/Clogo16.PNG')}></img>
            <img src={require('./../images/Clogo17.PNG')}></img>
            <img src={require('./../images/Clogo18.PNG')}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFourComponent;
