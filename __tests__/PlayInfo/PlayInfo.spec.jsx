import React from 'react';
import { shallow } from 'enzyme';
import PlayInfo from '../../client/src/components/PlayInfo/PlayInfo';

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<PlayInfo />);
  });
});
