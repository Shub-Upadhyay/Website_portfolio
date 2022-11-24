import React from "react";

import Photo_two from "../image/six.jpg";
import Photo_three from "../image/three.webp";
import Photo_four from "../image/four.jpeg";
import Photo_five from "../image/seven.jpeg";
 const Content = ()=>{
    return (
        <>

        <div id="pictures">
        <img className="content_img" src = {Photo_five} alt="2nd" />  
        <img className="content_img" src = {Photo_four} alt="2nd" />  
        <img className="content_img" src = {Photo_two} alt="1st" />
        <img className="content_img" src = {Photo_three} alt="2nd" />   
        </div>    
          
        </>


    );
 }

 export default Content;