/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import userServices from '../services/users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ViewProfile() {

    const [userProfile, setUserProfile] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            navigate('/signin');
        } else {
            userServices.getProfile(dispatch)
            .then((response) => {
                console.log(response);
                setUserProfile(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('loggedInUser');

        setUserProfile({});
        dispatch({
            type: 'USER_LOGOUT',
        });

        navigate('/signin');
    }

    const calculateWidth = () => {
        return `${(toString(userProfile.createdAt).length + 1) * 20}px`;
    }

    return (
        <div>
            <p><b><i>{userProfile.name}</i></b> has signed in! <button onClick={handleLogout}>logout</button></p>

            <h3>User Profile</h3>

            <label>
                Full Name:  
                <input 
                    type='text'
                    value={userProfile.name}
                    onChange={(e)=> setUserProfile({...userProfile, name: e.target.value})}
                    disabled
                />
            </label>
            <br /><br />
            <label>
                Email: 
                <input 
                    type='email'
                    value={userProfile.email}
                    onChange={(e)=> setUserProfile({...userProfile, email: e.target.value})}
                    disabled
                />
            </label>
            <br /><br />
            <label>
                Account Created At:
                <input 
                    type='date-time'
                    value={Date(userProfile.createdAt)}
                    style={{ width: calculateWidth() }}
                    onChange={(e)=> setUserProfile({...userProfile, createdAt: e.target.value})}
                    disabled
                />
            </label>
        </div>
    )
}

export default ViewProfile;