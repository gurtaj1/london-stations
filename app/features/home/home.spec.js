import React from 'react';
import { shallow } from 'enzyme';

import Home from 'features/home/home';
import fixture from 'features/home/home.fixture';

describe('features.home', () => {
  describe('Home', () => {
    const props = fixture;

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should export something', () => {
      expect(Home).toBeDefined();
    });

    it('should render without crashing', () => {
      const wrapper = shallow(<Home {...props} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should call props.history.push if props.error is truthy', () => {
      const updatedProps = {
        ...props,
        home: {
          ...props.home,
          homeData: null,
          error: {}
        }
      };
      const wrapper = shallow(<Home {...props} />);
      wrapper.setProps(updatedProps);

      expect(updatedProps.history.push).toHaveBeenCalled();
    });

    it('should not call props.history.push if props.error is falsy', () => {
      const updatedProps = {
        ...props,
        home: {
          ...props.home,
          homeData: [
            {
              name: 'station-name-2',
              tubeLines: [
                'central'
              ]
            }
          ]
        }
      };
      const wrapper = shallow(<Home {...props} />);
      wrapper.setProps(updatedProps);

      expect(updatedProps.history.push).not.toHaveBeenCalled();
    });
  });
});
