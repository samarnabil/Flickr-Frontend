import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import useForm from "./useNewForm";
import validateLogin from "./validateLogin";
import Header from "../navbar/mainNav"


export default function Login() {
  
  const {handleChange, handleSubmit, values , errors} = useForm(submit, validateLogin);

  function submit () {
    console.log("success")
  }
  return (
    <div className="App">
      <Header isLogged={false}/>
      {/* End Header */}
      {/* Start login */}
        <div class="card-container">
        <div class="card">
            <div class="content-container">
            {/*  start logo  */}
            <div class="logo">
                <span class="blue-circle"></span>
                <span class="Pink-circle"></span>
            </div>
            {/*  End logo */}
            {/*  start signup header  */}
            <h6>Login for Flickr</h6>
            {/* <!-- End signup header --> */}
            {/*  Start Form Part  */}
                <form  onSubmit={handleSubmit} noValidate>
                    {/* Start Email box  */}
                    <div class="box-one">
                        <input type="email" name="email"  id="email" required  
                        value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <label for="email">Email</label>
                    </div>
                    {/* End Email box  */}
                    {/* Start Password box  */}
                    <div class="box-one">
                        <input type="password" name="password"  id="password" required 
                        value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                        <label for="password">Password</label>
                        <div class="eye-box">
                            <i class="far fa-eye"></i>
                        </div>
                    </div>
                    <div class="signup-button">
                        <button type="submit">Login</button>
                    </div>
                    {/* End signup button box */}
                </form>
                {/*  End Form Part  */}
                {/* Start Data   */}
                 {/* End Form Part  */}
                <div class="data">
                    <div class="all-info">
                        {/*  Start forget part  */}
                        <div class="forgot-part">
                            <a href="#">Forgot Password?</a>
                        </div>
                        {/* End agreement part  */}
                        {/* Start Seperator line part */}
                        <div class="seperator-line">
                            <hr/>
                        </div>
                        {/* End Seperator line part  */}
                        {/* Start checking menber part  */}
                        <p class="check-member">Not a Flickr member? <a href="#">Sign up here</a></p>
                        {/* End checking menber part  */}
                    </div>
                </div>
                {/* End Data   */}
          </div>
          <footer>
                <div class="custom-select">
                    <select name="language" id="lang">
                        <option class="eng">English</option>
                        <option class="deutsch">Deutsch</option>
                        <option class="chinese">中国人</option>
                        <option class="spanish">Español</option>
                        <option class="french">français</option>
                        <option class="italian">Italiano</option>
                        <option class="japanese">日本語</option>
                        <option class="portuguese">Português</option>
                        <option class="vietnamese">Tieng viet</option>
                    </select>
                    <span class="custom-arrow">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                </div>
                <div class="HPT-links">
                    <a href="#" class="help">Help</a>
                    <a href="#" class="privacy">Privacy</a>
                    <a href="#" class="tems">Terms</a>
                </div>
            </footer>
        </div>
      </div>
      {/* End login */}
    </div>
  );
}