import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import captureImage from './../images/Capture.PNG';
import './index.css';

const PageTwoComponent = () => {
  return (
    <>
      <div class="pageTwoBody">
        <div class="pTwoImgSection">
          <img src={captureImage} class="pTwoPic"></img>
        </div>

        <section class="paraSec">
          <div>
            <p class="ptag1">
              Try the business software used by over<br></br> 50,000 companies
              across the globe to <br></br> exceed customer and employee
              <br></br> expectations.
            </p>
          </div>

          <div class="btnblock">
            <div class="btnsect1">
              <div className="directionGroup">
                <button class="btngroup">Customer Service</button>

                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
              <div className="directionGroup">
                <button class="btngroup">HR Management</button>
                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
              <div className="directionGroup">
                <button class="btngroup">Marketing Automation</button>
                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
            </div>
            <div class="btnsect2">
              <div className="directionGroup">
                <button class="btngroup">IT Service Management</button>
                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
              <div className="directionGroup">
                <button class="btngroup">Sales Automation</button>
                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
              <div className="directionGroup">
                <button class="btngroup">All Product & Trials</button>
                <NorthEastIcon
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: -32,
                    marginBottom: 16,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageTwoComponent;
