const getToken = () => {
    const token = sessionStorage.getItem('loggedInUser');
    if (token) {
        return JSON.parse(token).token;
    }

    return null;
}

export default getToken;