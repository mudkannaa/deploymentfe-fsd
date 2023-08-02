/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from './NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <h2>Welcome to the React Application!</h2>
            <p>This application allows the users to register, login and view the list of users registered in the app.</p>

            <p>
                Moreover, the authenticated users can then:

                <ul>
                    <li>View their profile in the dashboard</li>
                    <li>Edit Profile</li>
                    <li>Delete Profile</li>
                </ul>
            </p>
      </div>
  )
}

export default Home;