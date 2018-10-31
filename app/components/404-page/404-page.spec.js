import React from 'react';
import { shallow } from 'enzyme';
import Page404 from 'components/404-page/404-page.jsx';

describe('<Page404 />', () => {
  it('should export a class', () => {
    expect(Page404).toBeDefined();
  });

  it('should render as expected, without crashing', () => {
    const wrapper = shallow(<Page404 />);

    expect(wrapper).toMatchSnapshot();
  })
});
