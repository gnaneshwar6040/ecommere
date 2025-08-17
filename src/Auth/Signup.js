import { useState } from "react";
import { validateEmail } from "../utils/utils";
import axios from "axios";

function Signup(){

  //use state variables
 var [name , setName]=useState("");
var [email , setEmail]=useState("");
var [mobile , setMobile]=useState("");
var [pword , setPword]=useState("")

//Error variables
var [nameError, setnameError] = useState("")
var [emailError, setemailError]=useState("")
var [mobileError, setmobileError]=useState("")
var [pwordError, setpwordError]=useState("")

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

async function handleCreateAccount(){
  var noOfErrors=0;


  if(name.length <3){
    setnameError("minimum 3 characters")
    noOfErrors++
  }
  else{
    setnameError("")
  }

  if(validateEmail(email)){
    setemailError("")
  }else{
    setemailError("Email is invalid")
        noOfErrors++

  }
  
  if(mobile.length == 10){
    setmobileError("")
  }
  else{
    setmobileError("Mobile Number is invalid")
        noOfErrors++

  }

  if(pword.length<7){
    setpwordError("Minimum 8 charactors")
        noOfErrors++

  }
  else{
    setpwordError("")
  }

if(noOfErrors == 0){
  console.log("Api calling is successfull")
  var apiInputData = {
    Name : name , Mobile : mobile , Email : email , Password :pword
  }
  var apiResponse= await axios.post("https://api.softwareschool.co/auth/signup" , apiInputData)
console.log(apiResponse.data.result)

if(apiResponse.result == "SUCCESS"){
  
}

}




}
    return(
        <div className="container">
             <div className="row">
                  <div className="col-4">
                      <h2>Create-Account</h2>
                      <div className="mt-3">
                          <label>Name  </label>
                          <input type="text" onChange={event => handleNamechange(event)} className="form-control" placeholder="Enter Your Name"/>
                          <div className="text-danger">{nameError}</div> 
                      </div>
                       <div className="mt-3">
                          <label>Mobile  </label>
                          <input type="text" onChange={event => handleMobilechange(event)} className="form-control" placeholder="Enter Your Number"/> 
                          <div className="text-danger">{mobileError}</div>
                      </div>
                       <div className="mt-3">
                          <label>Email  </label>
                          <input type="Email" onChange={event => handleEmailchange(event)} className="form-control" placeholder="Enter Your Email"/> 
                          <div className="text-danger">{emailError}</div>
                      </div>
                       <div className="mt-3">
                          <label>Password  </label>
                          <input type="Password" onChange={event => handlePwordchange(event)} className="form-control" placeholder="Enter Your Password"/>
                          <div className="text-danger">{pwordError}</div> 
                      </div>
                       <div className="mt-3">
                          <button className="btn btn-warning" onClick={event => handleCreateAccount()}>Create Account</button> 
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