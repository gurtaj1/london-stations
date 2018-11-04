import React from 'react';
import { shallow } from 'enzyme';

import Title from 'components/title/title';
import fixture from 'components/title/title.fixture';

describe('<Title />', () => {
  const props = fixture;

  it('should export a class', () => {
    expect(Title).toBeDefined();
  });

  it('should render as expected, without crashing', () => {
    const wrapper = shallow(<Title {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
