import React from "react"
import {Link} from "react-router-dom"
import "./register.css"
function Register(){
    return(
        <div className="register">
        <span className="registerTitle">Register</span>
<form className="registerForm">
<label>User Name</label>
<input type="text" className="registerInput" placeholder="Enter Your User Name"/>
<label>Emial</label>
<input type="text" className="registerInput" placeholder="Enter Your Email"/>
<label>Password</label>
<input type="password" className="registerInput" placeholder="Enter Your Password"/>
<button className="registerButton">Register</button>
</form>
<button className="registerLoginButton">
<Link className="link" to="/login">Login</Link>
</button>
        </div>
    )
}
export default Register