import React from 'react';
import { shallow } from 'enzyme';
import PlayButton from '../../client/src/components/PlayButton/PlayButton';

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<PlayButton />);
  });
});
