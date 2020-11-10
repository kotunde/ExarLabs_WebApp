import axios from "axios";

class UserService {
  path = "/users";

  getAll() {
    return axios.get(this.path);
  }

  getById(id) {
    return axios.get(`${this.path}/${id}`);
  }

  create({ name, email }) {
    return axios.post(this.path, { name, email });
  }

  update({ name, email }) {
    return axios.put(this.path, { name, email });
  }

  delete(id) {
    return axios.delete(`${this.path}/${id}`);
  }
}

export default new UserService();
