import React from 'react';
import './index.css'


const PageFiveComponent =()=>{

    return(
        <>
        <div class="page5Body">
        <div class="sect5quote">
          <img src={require('../images/quote1.PNG')}></img>
          <img
            className="watersonImgae"
            alt=""
            title=""
            src="https://website-assets-fw.freshworks.com/attachments/cksep6tim00um4cg0hz2sy8fv-waterstons.one-half.png"
          ></img>
          <img src={require('../images/quote2.PNG')}></img>
        </div>
        <div class="sect5para">
          <p class="ptag5">
            “The Freshworks team was a great asset during implementation and
            continue to be a key partner <br></br> for Waterstons as we look to
            further mature and improve our services to customers, tailored to{' '}
            <br></br> their specific needs.”
            <h2 class="headfive">
              Alex Bookless, Head of Managed Services, Waterstons
            </h2>
          </p>
        </div>
      </div>
      </>

    );
}



export default PageFiveComponent;