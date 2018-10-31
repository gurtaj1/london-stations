import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import ApiService from 'shared/services/api-service/api-service';
import cookies from 'shared/factories/cookie-factory/cookie-factory';
import fixture from './api-service.fixture';

// Mock all axios requests
const mockAxios = new AxiosMockAdapter(axios);

mockAxios.onGet().reply(200);

describe('Shared', () => {
  describe('Services', () => {
    describe('ApiService', () => {
      describe('get', () => {
        afterEach(() => {
          cookies.remove('jwtToken', 'state');
        });

        const spiedGet = jest.spyOn(axios, 'get');

        it('should create a get request to the correct endpoint', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';

          ApiService.get(requestURL);

          expect(spiedGet).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object)
          );
        });
      });
    });
  });
});
