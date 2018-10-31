import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import HomeContainer from 'containers/home-container/home-container';

describe('LS.Containers', () => {
  describe('Home Container', () => {
    it('should export something', () => {
      expect(HomeContainer).toBeDefined();
    });
  });
});
