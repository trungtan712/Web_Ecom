import Api from "./ApiService";

export default class ApiClientSerivce extends Api {
  addProduct = async (data) => {
    return await this.post(`/products`, data, {});
  }
}