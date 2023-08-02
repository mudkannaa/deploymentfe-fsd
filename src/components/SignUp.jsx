/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../services/auth';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();

        auth.signup({ name, email, password });

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h3>Register</h3>

            <form onSubmit={handleSignUp}>
                <input 
                    type='text'
                    placeholder='name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br /><br />

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

                <button type='submit'>Sign Up</button>
            </form>

            <p>
                Already Registered? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    )
}

export default SignUp;