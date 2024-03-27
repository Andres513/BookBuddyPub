import React from "react"
import { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'

export default function Login({token, setToken}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function loggingIn(event){
    event.preventDefault()

    try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
            email: email, 
            password: password 
        })
    })
        const results = await response.json()
        setToken(results.token)
        console.log(results)
    } catch(error){
        setError(error.message)
    }  
    
} 
return (
<>
<form className="login" onSubmit={loggingIn}>
            <h1>Log Into Your Account</h1>
            <label>Email: 
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
         </label><br/>
            <label>Password: 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
         </label><br/>
         <button>Log in</button><br/>
        </form>
        <Link to="/"><button>Back Home!</button></Link>
        <Link to="/register"><button>Create an Account!</button></Link>
</>
    )
}