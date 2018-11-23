import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default class Model {
  plural;
  apiUrl = 'http://some-server.com:8080/api';

  find(filter) {
    return this.getRequest(this.plural, { filter });
  }

  create(items) {
    return this.postRequest(this.plural, items);
  }

  getById(id, filter) {
    return this.getRequest(`${this.plural}/${id}`, { filter });
  }

  updateById(id, data) {
    return this.patchRequest(`${this.plural}/${id}`, data);
  }

  findOne(filter) {
    return this.getRequest(`${this.plural}`, { filter: { ...filter, limit: 1 } })
      .then((result) => result[0] || null);
  }

  delete(id) {
    return axios.delete(`${this.apiUrl}/${this.plural}/${id}`);
  }

  count(where) {
    return this.getRequest(`${this.plural}/count`, { where });
  }

  async getRequest(url, filter) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      params: filter,
      headers: {
        Authorization: token
      }
    };
    return axios.get(`${this.apiUrl}/${url}`, config)
      .then((response) => response.data);
  }

  async postRequest(url, data) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      headers: {
        Authorization: token
      }
    };
    return axios.post(`${this.apiUrl}/${url}`, data, config).then((response) => response.data);
  }

  async patchRequest(url, data) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      headers: {
        Authorization: token
      }
    };
    return axios.patch(`${this.apiUrl}/${url}`, data, config).then((response) => response.data);
  }
}