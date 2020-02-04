import React from 'react';
import { shallow } from 'enzyme';
import TimeDisplay from '../../client/src/components/PlayInfo/TimeDisplay';

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<TimeDisplay />);
  });
});
