import * as React from "react"
import "./RegisterForm.css"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import apiClient from "../../services/apiClient"
import { useAuthContext } from "../../contexts/auth"

//Will render inside the App components where the user will
//have access to create an account

export default function RegisterForm(){

    //Imports setUser from authContext to set user information
    //with email, first and last name, etc.
    const { user, setUser, isProcessing, setIsProcessing} = useAuthContext()

    //might change this to use authContext variables
    const [error, setError] = useState({})

    const navigate = useNavigate()
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    //This function is used to check error such as invalid
    //emails and not matching passwords
    const handleOnInputChange = (event) => {
        if(event.target.name === "password"){
            if(form.confirm_password && form.confirm_password !== event.target.value){
                setError((e) => ({ ...e, confirm_password: "Password's do not match"}))
            }else{
                setError((e) => ({ ...e, confirm_password: null}))
            }
        }
        if(event.target.name === "confirm_password"){
            if(form.password && form.password !== event.target.value){
                setError((e) => ({ ...e, confirm_password: "Password's do not match"}))
            }else{
                setError((e) => ({ ...e, confirm_password: null}))
            }
        }
        if(event.target.name === "email"){
            if(event.target.value.indexOf("@") === -1){
                setError((e) => ({ ...e, email: "Please enter a valid email."}))
            }else{
                setError((e) => ({ ...e, email: null}))
            }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }

    //This function is used to submit an user registration from
    //If any errors exist from error state variable, it will display
    //an error message. If email already exist, then another error message
    //will display. If all is good, user will be navigated to trending page
    //and their data is store in the authContext user variable
    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, form: null}))

        if(form.confirm_password !== form.password){
            setError((e) => ({ ...e, confirm_password: "Passwords do not match"}))
            setIsProcessing(false)
            return
        }else{
            setError((e) => ({ ...e, confirm_password: null}))
        }
        const {data, error} = await apiClient.signUpUser({ first_name: form.first_name, last_name: form.last_name, email: form.email, password: form.password})
        if(error){
            setError((e) => ({ ...e, form: error}))
        }
        if(data){
            setUser(data.user)
            apiClient.setToken(data.token)
            navigate("/trending")
        }
        setIsProcessing(false)
    }

    return (
        <div className="register-form-container">
            <div className="inputss">
                <div className="titles">
                    <p>Sign Up</p>
                    {error.form && <div className="errors"><span>{error.form}</span></div>}
                </div>
                <div className="split-form-inputs">
                    <div className="form-inputs">
                        <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleOnInputChange}/>
                        {error.first_name && <div className="error"><span>{error.first_name}</span></div>}
                    </div>
                    <div className="form-inputs">
                        <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleOnInputChange}/>
                        {error.last_name && <span className="error">{error.last_name}</span>}
                    </div>
                </div>
                <div className="form-inputs">
                    <input type="text" name="email" placeholder="Email Address" value={form.email} onChange={handleOnInputChange}/>
                    {error.email && <span className="error">{error.email}</span>}
                </div>
                <div className="form-inputs">
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange} />
                    {error.password && <span className="error">{error.password}</span>}
                </div>
                <div className="form-inputs">
                    <input type="password" name="confirm_password" placeholder="Confirm Password" value={form.confirm_password} onChange={handleOnInputChange}/>
                    {error.confirm_password && <span className="error">{error.confirm_password}</span>}
                </div>
                <div className="footers">
                    <button className="sign-up-btn" disabled={isProcessing} onClick={handleOnSubmit}>{isProcessing ? "Loading..." : "Sign Up"}</button>
                    <p>
                        Already a Member?
                        <Link className="links" to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
            <div className="featured">
                hello
            </div>
        </div>
    )
}