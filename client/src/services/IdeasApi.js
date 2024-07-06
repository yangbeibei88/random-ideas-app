import axios from "axios";

class IdeasApi {
  constructor() {
    this._apiUrl = "http://localhost:8080/api/ideas";
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }
}

export default new IdeasApi();
