import React from "react";
import Photo from "../image/eight.jpeg";

const Header = ()=>
{
    return(
        <>
        
        <div className="home">
            <div className="two">
            <img src ={Photo} alt="this is header background"  className="headerImage" />
            <div className="header_box">
            
            <h1 className="title">SAURABH KUMAR</h1>
            <h4 className="des">WILD LIFE PHOTOGRAPHER</h4>
            </div> 
            
            </div>
         </div>
            
            </>
        
        
    );
}


export default Header;