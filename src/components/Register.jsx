/* TODO - add your code to create a functional React component that renders a registration form */

/* TODO - add your code to create a functional React component that renders a login form */
import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"

export default function Register({token, setToken, email, setEmail, password, setPassword}){

const [ firstName, setFirstName ] = useState('')
const [ lastName, setLastName ] = useState('')
// const [ email, setEmail ] = useState('')
// const [ password, setPassword ] = useState('')
const [ error, setError ] = useState('')

async function handleRegister(event){
     event.preventDefault()
    try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            })
        }) 
        const result = await response.json()
        setToken(result.token)
        console.log(result)
        console.log(token)
    } catch(error) {
        setError(error.message)
    }
}
useEffect(()=> {
    console.log(token)
},[token])
return (
    <>
        <form className="register" onSubmit={handleRegister}>
            <h1>Create an Account</h1>
         <label>First Name: 
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label><br/>
            <label>Last Name: 
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label><br/>
            <label>Email: 
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
         </label><br/>
            <label>Password: 
            <input type="password"value={password} onChange={(e)=> setPassword(e.target.value)}/>
         </label><br/>
         <button>Create Account</button><br/>
        </form>
        <Link to="/"><button>Back Home!</button></Link>
         <Link to="/login"><button>Log In!</button></Link>
    </>
)
}