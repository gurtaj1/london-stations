import React from 'react';
import { shallow } from 'enzyme';

import ListItem from 'components/list-item/list-item';
import fixture from 'components/list-item/list-item.fixture';

describe('<ListItem />', () => {
  const props = fixture;

  it('should export a class', () => {
    expect(ListItem).toBeDefined();
  });

  it('should render as expected, without crashing', () => {
    const wrapper = shallow(<ListItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
