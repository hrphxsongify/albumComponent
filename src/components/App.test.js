import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

describe('App component', () => {
  it('render', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
