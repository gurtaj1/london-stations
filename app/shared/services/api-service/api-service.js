import axios from 'axios';
import merge from 'lodash/merge';

export default class ApiService {
  /**
   * GET from api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static get (endpoint, config = {}) {
    return axios.get(endpoint, merge({}, ApiService.setConfig(), config));
  }
}
