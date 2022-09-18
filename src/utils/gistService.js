const BASE_URL = "https://api.github.com";

const getPublicGists = () => `${BASE_URL}/gists/public`;
const getSingleGistUrl = (id) => `${BASE_URL}/gists${id}`;
const getGistForUser = (username) => `${BASE_URL}/users/${username}/gists`;

export default { getPublicGists, getGistForUser, getSingleGistUrl };
