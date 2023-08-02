import instance from '../services/instance';

const signup = async (credentials) => {
    try {
        console.log('Signing up user...');
        const response = await instance.authInstance.post('/users/signup', credentials);
        if (response) {
            console.log('Signup Successful!');
            console.log(response.data.message);
        }
    } catch (error) {
        console.error('signup failed', error);
    }
}

const signin = async (credentials) => {
    try {
        console.log('Signing in user...');
        const response = await instance.authInstance.post('/users/signin', credentials);

        if (response) {
            console.log('Signin Successful!');
            sessionStorage.setItem('loggedInUser', JSON.stringify(response.data));
            return response.data;
        }

        return null;
    } catch (error) {
        console.error('signin failed', error);
        return null;
    }
}

export default {
    signup,
    signin
};