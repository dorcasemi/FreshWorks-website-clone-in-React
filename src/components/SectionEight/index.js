import React from 'react';
import './index.css';
import Imagef from '../../components/images/facebook.blue.png';
import Imagef2 from '../../components/images/facebook-re.png';
import Imagey from '../../components/images/youtube.red.png';
import Imagey2 from '../../components/images/youtube-r.png';
import Imaget from '../../components/images/twit.blue.jpg';
import Imaget2 from '../../components/images/twit-r.png';
import Imagel from '../../components/images/LinkedIn-logo.png';
import Imagel2 from '../../components/images/linkd-r.png';
import Imageg from '../../components/images/glass.green.png';
import Imagep from '../../components/images/fresh.jpg';
import Imaged from '../../components/images/glaszdo.png';
import Imagem from '../../components/images/msgm.png';


const PageEightComponent = () => {
    return (
      <div className="footerContact">
        <div className="Contacts">
          <div className="contactNav">
            <ul>
              <div className="Fresh">
                <img src={"https://www.freshworks.com/static-assets/images/common/company/logos/logo-fworks-black.svg"} className="freshW" />
               
              </div>
              <li>
                <a className="freshNav" href="#">
                  Freshdesk
                </a>
              </li>
              <li>
                <a className="freshNav" href="#">
                  Freshsales
                </a>
              </li>
              <li>
                <a className="freshNav" href="#">
                  Freshmarketer
                </a>
              </li>
              <li>
                <a className="freshNav" href="#">
                  Freshservices
                </a>
              </li>
              <li>
                <a className="freshNav" href="#">
                  Freshteam
                </a>
              </li>
            </ul>
          </div>
  
          <div className="Company">
            <p className='companyName'>COMPANY</p>
            <a className="companyNavs" href="#">
              About
            </a>
            <a className="companyNavs" href="#">
              leadership
            </a>
            <a className="companyNavs" href="#">
              Board of directors
            </a>
            <a className="companyNavs" href="#">
              Investors
            </a>
            <a className="companyNavs" href="#">
              Customers
            </a>
            <a className="companyNavs" href="#">
              Affiliates
            </a>
            <a className="companyNavs" href="#">
              Partners
            </a>
            <a className="companyNavs" href="#">
              Philanthrophy
            </a>
            <a className="companyNavs" href="#">
              Careers
            </a>
            <a className="companyNavs" href="#">
              News room
            </a>
            <a className="companyNavs" href="#">
              GDPR
            </a>
            <a className="companyNavs" href="#">
              Tax FAQs
            </a>
            <a className="companyNavs" href="#">
              Contacts us
            </a>
          </div>
          <div className="mainIconContainer">
            <p className='companyName'>CONNECT WITH US</p>
            <div className="iconsContainer">
              <div className="Icons">
                <a href="#">
                  <img src={Imagef2} className="face" />
                  <img src={Imagef} className="Overlay" />
                </a>
              </div>
              <div className="Icons2">
                <a href="#">
                  <img src={Imaget2} className="Tweet" />
                  <img src={Imaget} className="Overlay2" />
                </a>
              </div>
              <div className="Icons3">
                <a href="#">
                  <img src={Imagey2} className="Tube" />
                  <img src={Imagey} className="Overlay3" />
                </a>
              </div>
            </div>
            <div className="iconsContainer2">
              <div className="Icons4">
                <a href="#">
                  <img src={Imagel2} className="Link" />
                  <img src={Imagel} className="Overlay4" />
                </a>
              </div>
              <div className="Icons5">
                <a href="#">
                  <img src={Imaged} className="Glass" />
                  <img src={Imageg} className="Overlay5" />
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="msgContact">
          <img src={Imagem} className="Msg" />
          <p className='contactSales'>CONTACT SALES</p>
        </div>
      </div>
    );
  }
  export default PageEightComponent;