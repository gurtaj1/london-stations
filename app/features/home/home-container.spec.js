import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from 'features/home/home-container';

describe('LS.Containers', () => {
  describe('Home Container', () => {
    it('should export something', () => {
      expect(HomeContainer).toBeDefined();
    });

    it('should render without crashing', () => {
      const wrapper = shallow(<HomeContainer />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
