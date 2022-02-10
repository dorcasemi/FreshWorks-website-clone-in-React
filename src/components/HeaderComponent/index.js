import React from "react";
import freshworks_blacklogo from '../images/Freshworks_blacklogo.png';
import aFlag from '../images/Aflag.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './index.css';



const HeaderComponent =()=>{

    return(
        <>
        <div class="header">
        <div class="startpoint">
          <img src={freshworks_blacklogo} className="logo"></img>
        </div>

        <div class="nav-bar">
          <a href="#">Product</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <a href="#">Platform</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <a href="#">Company</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <a href="#">Resources</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <a href="#">Customers</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <a href="#">Support</a>
          <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />
          <div class="endpoint">
            <img src={aFlag} class="endlogo"></img>
          </div>
        </div>
      </div>
        
        </>

    );
}

export default HeaderComponent;