import React from 'react';
import { shallow } from 'enzyme';
import Waveform from '../../client/src/components/PlayInfo/Waveform';

describe('Test Suite', () => {
  it('should render without throwing an error', () => {
    shallow(<Waveform />);
  });
});
