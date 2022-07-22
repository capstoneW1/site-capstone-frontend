import * as React from "react"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import { useAuthContext } from "../../contexts/auth"

export default function Login() {

    //global varibale import from authContext
    const { user, setUser } = useAuthContext()

    //used to navigate users to different pages
    const navigate = useNavigate()

    //sets errors
    const [errors, setErrors] = useState({})

    //saves user input 
    const [form, setForm] = useState({
        email: "",
        password: "",
      })

    // const {setUser} = useAuthContext()
    
      //allows the user to input information and sets the login form
      const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") <= 0) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      //calls api to log in user
      const loginUser = async () => {
        const {data, error} = await apiClient.loginUser({email: form.email, password: form.password})
        if (error) {

          console.log("Not signed in", error)
          setErrors((e) => ({...e, form:error}))
        }
        else
          setUser(data.user)
          apiClient.setToken(data.token)
          navigate("/trending")

        // if(data?.user) {
        //   setUser(data.user)
        //   apiClient.setToken(data.token)
        //   console.log("Here")
        // }
      }
    
    
      //navigates user to register page
    const createUser = async () => {
        navigate("/register")
    }

      
  return (
    <div className="login-page">
        <div className="card">
            <h2>Login</h2>
            <br></br>
            <div className="form">
                <div className="input-field">
                    <input className="form-input" type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleOnInputChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                    <input className="form-input" type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange}/>
                </div>
                {errors.form && <span className="error">{errors.form}</span>}
                <div className="sub-login">
                    <button className="submit-login" onClick={loginUser}>Login</button>
                
                    <button className="forgot-pass" >Forgot Password?</button>
                    <p>________________________________________________</p>
                    <button className="register" onClick={createUser}>Create New Account</button>
                </div>
                
            </div>
        </div>

        <div className="trending">
            FEATURED SECTION
        </div>
    </div>
  )
}
