import React from "react";
import './index.css';



const FooterComponent = () => {
  return (
    <div className="Footer">
      <div className="leftFooter">
        <a className="footerNavs" href="#">
        Terms of Service{' '}
        </a>
        <a className="footerNavs" href="#">
          - Privacy Notice -
        </a>
        <a className="footerNavs" href="#">
          Takedown Policy -
        </a>
        <a className="footerNavs" href="#">
          GDPR -
        </a>
        <a className="footerNavs" href="#">
          Security -
        </a>
        <a className="footerNavs" href="#">
          CSR Policy -
        </a>
        <a className="footerNavs" href="#">
          Tax FAQs -
        </a>
        <a className="footerNavs" href="#">
          Unsubscribe
        </a>
      </div>

      <div className="rightFooter">
        <p className="footerNavs">Copyright © Freshworks Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default FooterComponent;
