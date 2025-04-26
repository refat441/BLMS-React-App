import requests from "./httpRequest";
const api = {
    login: async (credentials) => requests.post("/login", credentials),
    
};

export default api;
