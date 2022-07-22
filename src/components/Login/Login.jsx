import * as React from "react"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import { useAuthContext } from "../../contexts/auth"

export default function Login() {

    //global varibale import from authContext
    const { user, setUser, isProcessing, setIsProcessing } = useAuthContext()

    //used to navigate users to different pages
    const navigate = useNavigate()

    //sets errors
    const [error, setError] = useState({})

    //saves user input 
    const [form, setForm] = useState({
        email: "",
        password: "",
      })

    
      //allows the user to input information and sets the login form
      const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") <= 0) {
            setError((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setError((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, form: null}))

        const {data, error} = await apiClient.loginUser({email: form.email, password: form.password})
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
    
    
      //navigates user to register page
    const createUser = async () => {
        navigate("/register")
    }

      
  return (
    <div className="login-page">
        <div className="card">
            <div className="titles">
              <p>Login</p>
              {error.form && <div className="errors"><span>{error.form}</span></div>}
            </div>
            <div className="input-field one">
                <input className="form-input" type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleOnInputChange}/>
                {error.email && <div className="error"><span>{error.email}</span></div>}
            </div>
            <div className="input-field">
                <input className="form-input" type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange}/>
            </div>
            <div className="sub-login">
                <button className="submit-login" disabled={isProcessing} onClick={handleOnSubmit}>{isProcessing ? "Loading..." : "Login"}</button>
                <p>Forgot Password?</p>
                <hr/>
                <button className="register" onClick={createUser}>Create New Account</button>
            </div>
        </div>
        <div className="trending">
            FEATURED SECTION
        </div>
    </div>
  )
}
