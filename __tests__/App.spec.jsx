import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

xdescribe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<App />);
  });
});
