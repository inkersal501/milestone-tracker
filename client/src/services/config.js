const apiEndpoint = import.meta.env.VITE_API_URL;
const defaultState = {
    auth: {
        isLoggedin: false,
        user: null
    }
}
export { apiEndpoint, defaultState };
