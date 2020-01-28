import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    const app = shallow(<App />);
    expect(app.text()).toEqual('App');
  });
});
