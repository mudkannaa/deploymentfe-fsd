/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../services/auth';
import { useDispatch } from 'react-redux';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async (event) => {
        event.preventDefault();

        // perform signin
        const user = await auth.signin({ email, password });

        console.log('user', user);

        setEmail('');
        setPassword('');

        if (user) {
            await dispatch({ type: 'SIGNIN_SUCCESS', payload: user });
        }

        navigate('/dashboard');
    }

    return (
        <div>
            <h3>Login</h3>

            <form onSubmit={handleSignUp}>
                <input 
                    type='email'
                    placeholder='email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /><br />

                <input 
                    type='password'
                    placeholder='password...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br /><br />

                <button type='submit'>Sign In</button>
            </form>

            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    )
}

export default SignIn;