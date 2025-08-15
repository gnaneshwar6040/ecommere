import { useState } from "react";

function Login(){

    var [email,setEmail]=useState("")
    var [pword,setPword]=useState("")

    function handleEmailchange(event){
        setEmail(event.target.value )

    }
      function handlePwordchange(){
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2>Login here</h2>
                    <div className="mt-3">
                        <label>Email</label>
                        <input type="email" onChange={event => handleEmailchange(event)} className="form-control" placeholder="Enter Your Email"/>
                    </div>
                     <div className="mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your Password"/>
                    </div>
                    <div className="mt-3"> <button className="btn btn-primary">Login</button></div>

                </div>

            </div>

        </div>

    )
}

export default Login;