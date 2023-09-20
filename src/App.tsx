// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      {/* https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg */}
      <img className='fb-logo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' />
        <div className='login-container'>
        <h2 className='log-into'>Log Into Facebook</h2>
          <input type='text' placeholder='Email or phone number' />
          <input type='text' placeholder='Password' />
          <button type='button' className='btn-login' placeholder='Log In' >Log In</button>
          <a className='forgot-account'>Forgot account?</a>
          <p className='or'>or</p>
          <button type='button' className='btn-create-new-account' placeholder='Log In' >Create new account</button>
        </div>
    </>
  )
}

export default App
