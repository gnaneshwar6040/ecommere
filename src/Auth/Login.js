import { useState } from "react";
import { validateEmail } from "../utils/utils";
import axios from "axios";

function Login(){

    // use state variables
    var [email,setEmail]=useState("")
    var [pword,setPword]=useState("")

    // error variables
    var [emailError, setemailError]=useState("")
    var [pwordError,setpwordError]=useState("")

    function handleEmailchange(event){
        setEmail(event.target.value )

    }
      function handlePwordchange(event){
        setPword(event.target.value)
    }

   async function handleLogin(){
        var noOfErrors=0;
        if(validateEmail(email)){
            setemailError("")
        }
        else{
            setemailError("Email is not valid")
            noOfErrors++
        }

        if(pword.length < 7){
            setpwordError("Minimum 8 charcters")
            noOfErrors++
        }
        else{
            setpwordError("")
        }

        if(noOfErrors== 0){
            console("Api is calling")
            var apiInputData ={
                Email : email, password : pword
            }
           var ApiResponse = await axios.post("https://dummyjson.com/auth/login" , ({
    
                            username: 'emilys',
                            password: 'emilyspass',
                            expiresInMins: 30, // optional, defaults to 60
  }),)
           console.log(ApiResponse)
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2>Login here</h2>
                    <div className="mt-3">
                        <label>Email</label>
                        <input type="email" onChange={event => handleEmailchange(event)} className="form-control" placeholder="Enter Your Email"/>
                        <div className="text-danger">{emailError}</div>
                    </div>
                     <div className="mt-3">
                        <label>Password</label>
                        <input type="password" onChange={event => handlePwordchange(event)} className="form-control" placeholder="Enter Your Password"/>
                        <div className="text-danger">{pwordError}</div>
                    </div>
                    <div className="mt-3"> <button className="btn btn-primary" onClick={event => handleLogin()}>Login</button></div>

                </div>

            </div>

        </div>

    )
}

export default Login;