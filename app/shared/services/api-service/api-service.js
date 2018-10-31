import axios from 'axios';

export default class ApiService {
  /**
   * GET from api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static get (endpoint) {
    return axios.get(endpoint);
  }
}
