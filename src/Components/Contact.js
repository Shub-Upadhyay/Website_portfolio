import React from "react";
import { useState } from "react";



const Contact = ()=>{
    const [Name , updateName] = useState(null);
    const [Email , updateEmail] = useState(null);

    return(
        <>
        <div ID="ContactInfo" >
        <div className="Contact US"> 
        <h3>Contact US</h3>
        <p className="email"> <b>Email</b> : upadhyay.shubham17@gmail.com</p>
        </div>
        <div className="userInfo">
        <h4>Fill the form for complete guidance</h4>
        <form onSubmit={()=> {updateName(Name) ; updateEmail(Email)}} className="form">
            <label>Name</label>
            <input type="text" name={Name}/>
            <br/>
            <label>Email </label>
            <input type="text"  name={Email}/>
            <br/>
            <button type="submit" >Submit</button>
        </form>
        </div>
        </div>
        </>
    );
}


export default Contact;