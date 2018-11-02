import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import ApiService from 'shared/services/api-service/api-service';

// Mock all axios requests
const mockAxios = new AxiosMockAdapter(axios);

const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
mockAxios.onGet(requestURL).reply(200);

describe('Shared', () => {
  describe('Services', () => {
    describe('ApiService', () => {
      describe('get', () => {
        const spiedGet = jest.spyOn(axios, 'get');

        it('should create a get request to the correct endpoint', () => {
          ApiService.get(requestURL);

          expect(spiedGet).toHaveBeenCalledWith(
            requestURL
          );
        });
      });
    });
  });
});
