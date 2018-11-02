import React from 'react';
import { shallow } from 'enzyme';
import Page404 from 'features/404-page/404-page';

describe('<Page404 />', () => {
  it('should export a class', () => {
    expect(Page404).toBeDefined();
  });

  it('should render as expected, without crashing', () => {
    const wrapper = shallow(<Page404 />);

    expect(wrapper).toMatchSnapshot();
  });
});
