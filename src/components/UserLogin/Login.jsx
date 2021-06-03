import React, { useState } from "react";
import "./Login.css";
import useForm from "./UseNewForm";
import Header from '../navbar/mainNav'
import validateLogin from "./ValidateLogin";
import UserLogin from "../../services/userServices"
import {Link} from "react-router-dom";

export default function Login(props) {
  
  const {handleChange, handleSubmit, values , errors} = useForm(submit, validateLogin);
  let accessToken = ''

  const navStyle={color:'blue'};

  function submit () {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    const object={
        'email':email,
        'password':pass
    }

    UserLogin(accessToken,object).then( response => {
        console.log(response.data.token);
        if (response.data.token){
            accessToken = response.data.token;
            localStorage.token = accessToken;
            console.log(localStorage.token);
            props.history.push('/user');
        }else{
            props.history.push('/sign-up');
        }
    })

  }
  return (
    <div className="App">
      <Header isLogged={false}/>
      {/* End Header */}
      {/* Start login */}
      <div className="card-container">
        <div className="login-card">
          <div className="content-container">
            {/*  start logo  */}
            <div className="logo">
                <span className="blue-circle"></span>
                <span className="Pink-circle"></span>
            </div>
            {/*  End logo */}
            {/*  start signup header  */}
            <h6>Login for Flickr</h6>
            {/* <!-- End signup header --> */}
            {/*  Start Form Part  */}
                <form  className="login-form" onSubmit={handleSubmit} noValidate>
                    {/* Start Email box  */}
                    <div className="box-one">
                        <input type="email" name="email"  id="email" required  
                        value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <label for="email">Email</label>
                    </div>
                    {/* End Email box  */}
                    {/* Start Password box  */}
                    <div className="box-one">
                        <input type="password" name="password"  id="password" required 
                        value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                        <label for="password">Password</label>
                        <div className="eye-box">
                            <i className="far fa-eye"></i>
                        </div>
                    </div>
                    {/* End Password box  */}
                    {/* Start remember email  */}
                    {/* <div className="remember">
                        <input type="checkbox" id="rem"/>
                        <label for="rem">Remember email address</label>
                    </div> */}
                    {/* End remember email  */}
                    {/* Start login button box  */}
                    <div className="signup-button">
                        <button type="submit">Login</button>
                    </div>
                    {/* End signup button box */}
                </form>
                {/*  End Form Part  */}
                {/* Start Data   */}
                 {/* End Form Part  */}
                <div className="data">
                    <div className="all-info">
                        {/*  Start forget part  */}
                        <div className="forgot-part">
                            <a>Forgot Password?</a>
                        </div>
                        {/* End agreement part  */}
                        {/* Start Seperator line part */}
                        <div className="seperator-line">
                            <hr/>
                        </div>
                        {/* End Seperator line part  */}
                        {/* Start checking menber part  */}
                        <p className="check-member">Not a Flickr member? <Link style={navStyle} to="/sign-up">Sign up here</Link></p>
                        {/* End checking menber part  */}
                    </div>
                </div>
                {/* End Data   */}
          </div>
        </div>
      </div>
      {/* End login */}
    </div>
  );
}