import { useState } from "react";

function Signup(){
 var [name , setName]=useState("");
var [email , setEmail]=useState("");
var [mobile , setMobile]=useState("");
var [pword , setPword]=useState("")

function handleNamechange(event){
setName(event.target.value)
}

function handleEmailchange(event){
  setEmail(event.target.value)
}

function handleMobilechange(event){
    setMobile(event.target.value)
}

function handlePwordchange(event){
    setPword(event.target.value)
}
    return(
        <div className="container">
             <div className="row">
                  <div className="col-4">
                      <h2>Create-Account</h2>
                      <div className="mt-3">
                          <label>Name  </label>
                          <input type="text" onChange={event => handleNamechange(event)} className="form-control" placeholder="Enter Your Name"/> 
                      </div>
                       <div className="mt-3">
                          <label>Mobile  </label>
                          <input type="text" onChange={event => handleMobilechange(event)} className="form-control" placeholder="Enter Your Number"/> 
                      </div>
                       <div className="mt-3">
                          <label>Email  </label>
                          <input type="Email" onChange={event => handleEmailchange(event)} className="form-control" placeholder="Enter Your Email"/> 
                      </div>
                       <div className="mt-3">
                          <label>Password  </label>
                          <input type="Password" onChange={event => handlePwordchange(event)} className="form-control" placeholder="Enter Your Password"/> 
                      </div>
                       <div className="mt-3">
                          <button className="btn btn-warning">Create Account</button> 
                      </div>
                      {
                        name
                      } <br/>
                      {
                        email
                      } <br/>
                      {
                        mobile
                      }<br/>
                      {
                        pword 
                      }
                  </div>
             </div>
        </div>
    )
}

export default Signup;