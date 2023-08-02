import instance from "./instance";

const getProfile = async (dispatch) => {
    try {
        console.log('fetching user profile...');

        const response = await instance.protectedInstance.get('/users/profile');

        if (response.status === 200) {
            console.log('fetching user profile successful!');

            // set the userProfile to the redux store
            await dispatch({
                type: 'USER_PROFILE',
                payload: response.data,
            });

            return response.data;
        } else if (response.status === 401) {
            console.log('token expired');
            return null;
        }
    } catch (error) {
        console.error('fetching user profile failed', error);
        return null;
    }
}

export default {
    getProfile,
}