import React, {useState} from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
       const [email, setEmail] = useState('');
       const [Password, setPassword] = useState('');
       
       const signIn = e => {
        e.preventDefault();

        //firebase works

       }

       const register = e => {
        e.preventDefault();

        //firebaseworks

       }

  return (
    <div className='login'>
     <Link to= '/' >
      <img
        className="login__logo"
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
      />   
     </Link>

      <div className='login__container'>
        <h1>Sign In</h1>
        
        <form>
            <h5>E-mail</h5>
            <input 
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)} 
            />

            <h5>Password</h5>
            <input 
            type='password'
            value={Password}
            onChange={e => setPassword(e.target.value)}
            />

            <button 
            type='submit' 
            onClick={signIn}
            className='login__signInButton'
            
            >Sign In</button>

            <p>
            By continuing, you agree to Amazon's Fake Clone
            Conditions of Use and Privacy Notice
            </p>
        </form>

        <button 
        onClick={register}
        className='login_registerButton'>
            Create Your Amazon Account
        </button>




      </div>

    </div>
    
  )
}

export default Login
