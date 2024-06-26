
{/* <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

<p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

<p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

<p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}

import { useState } from 'react'
import Register from './components/Register'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login token={token} setToken={setToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>
      <Route path="/register" element={<Register token={token} setToken={setToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>
      <Route path="/" element={<Books />}/>
    </Routes>
    </>
  )
}

export default App
