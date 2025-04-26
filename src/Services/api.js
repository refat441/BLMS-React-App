import requests from "./httpRequest";

const api = {
  login: (credentials) => requests.post("/login", credentials),
};

export default api;
