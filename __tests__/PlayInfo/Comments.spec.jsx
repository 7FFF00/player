import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../client/src/components/PlayInfo/Comments';

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<Comments />);
  });
});
