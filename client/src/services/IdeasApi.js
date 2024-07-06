import axios from "axios";

class IdeasApi {
  constructor() {
    this._apiUrl = "http://localhost:8080/api/ideas";
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  createIdea(data) {
    return axios.post(this._apiUrl, data);
  }
}

export default new IdeasApi();
