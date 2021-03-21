import Rest from "../services/rest_services";

const url = "/v1/Books";

export default class Livros extends Rest {
  static get_livros() {
    return super.get(`${url}`);
  }
}
