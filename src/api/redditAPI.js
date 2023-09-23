

import axios from "axios";

const CLIENT_ID = "QbPTetUHx_YuQ4ECj69d9Q";
const CLIENT_SECRET = "VJsORRyJ0U2W2lAWZhlj4EOlH3LH9w";

const redditAPI = axios.create({
  baseURL: "https://www.reddit.com",
  timeout: 5000,
  headers: {
    "User-Agent": "Redditiana/1.0",
  },
});

async function authenticate() {
  try {
    const response = await redditAPI.post("api/v1/access_token", null, {
      params: {
        grant_type: "client_credentials",
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    });
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

export default redditAPI;
export {authenticate}
