import axios from "axios";

export default class Api {
  constructor(url) {
    this.url = url;
  }
  
  getHeader = () => {
    const token = localStorage.getItem("token");
    // return { Authorization: "Bearer " + token };
    return {
      "Content-Type": "application/json",
      Authorization: token && "Bearer " + token,
    };
  };
  handleErr = (err) => {
    return {
      status: err?.status,
      msg: err?.data?.message || err?.data?.object,
    };
  };
  get = async (path, params) => {
    try {
      let headers = {};
      headers = this.getHeader();
      const resp = await axios.get(`${this.url}${path}`, {
        params: params,
        data: {},
        headers: { ...headers, "Content-Type": "application/json" },
      });
      return resp;
    } catch (err) {
      return this.handleErr(err.response);
    }
  };

  post = async (path, data, params) => {
    try {
      let headers = {};
      headers = this.getHeader();
      const resp = await axios.post(`${this.url}${path}`, data, {
        params: params,
        headers: { ...headers, "Content-Type": "application/json" },
      });
      return resp;
    } catch (err) {
      return this.handleErr(err.response);
    }
  };

  put = async (path, data, params) => {
    try {
      let headers = {};
      headers = this.getHeader();
      const resp = await axios.put(`${this.url}${path}`, data, {
        params: params,
        headers: { ...headers, "Content-Type": "application/json" },
      });
      return resp;
    } catch (err) {
      return this.handleErr(err.response);
    }
  };

  delete = async (path, params, data) => {
    let headers = {};
    headers = this.getHeader();
    try {
      const resp = await axios.delete(`${this.url}${path}`, {
        params: params,
        data: data,
        headers: { ...headers, "Content-Type": "application/json" },
      });
      return resp;
    } catch (err) {
      return this.handleErr(err.response);
    }
  };
}
