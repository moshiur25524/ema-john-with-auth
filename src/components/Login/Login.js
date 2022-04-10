import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, {replace:true })
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                    </div>
                    <input className='form-submit' type="submit" value="LOGIN" />
                </form>
                <p><small>
                    New to Ema-john ? <Link className='form-link' to='/signup'>Create a New Account</Link>
                </small></p>
            </div>
        </div>
    );
};

export default Login;