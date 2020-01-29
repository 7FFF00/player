import React from 'react';
import { shallow } from 'enzyme';
import TrackInfo from '../../client/src/components/TrackInfo/TrackInfo';
import timeSince from '../../client/src/components/TrackInfo/timeSince';
import {
  StyledTitle,
  StyledPlaylist,
  StyledTags,
} from '../../client/src/components/TrackInfo/styles';

describe('Track Info', () => {
  it('should render without throwing an error', () => {
    shallow(<TrackInfo />);
  });

  it('should format date to be human readable', () => {
    const yearsSince = timeSince('1989-01-01T01:00:00', '2020-01-01T01:00:00');
    const yearsSinceArr = yearsSince.split(' ');
    const monthsSince = timeSince('2020-01-01T01:00:00', '2020-02-01T01:00:00');
    const monthsSinceArr = monthsSince.split(' ');
    const weeksSince = timeSince('2020-01-01T01:00:00', '2020-01-22T01:00:00');
    const weeksSinceArr = weeksSince.split(' ');

    expect(yearsSinceArr[0]).toEqual('30');
    expect(yearsSinceArr[1]).toEqual(expect.stringMatching('year'));
    expect(monthsSinceArr[0]).toEqual('1');
    expect(monthsSinceArr[1]).toEqual(expect.stringMatching('month'));
    expect(weeksSinceArr[0]).toEqual('3');
    expect(weeksSinceArr[1]).toEqual(expect.stringMatching('week'));
  });

  it('should dynamically render passed in props', () => {
    const defaultedProps = shallow(<TrackInfo />);
    const smallProps = shallow(<TrackInfo title="Big Fish" tags={['beep']} playlist="Chillhop Lofi Beats" />);
    const largeProps = shallow(<TrackInfo tags={['dubstep', 'remix', 'chillhop', 'lofi']} />);

    expect(defaultedProps.find(StyledTags).dive().find('span')).toHaveLength(0);
    expect(defaultedProps.find(StyledPlaylist)).toHaveLength(0);
    expect(smallProps.find(StyledTags).dive().find('span')).toHaveLength(2);
    expect(smallProps.find(StyledTitle).text()).toEqual('Big Fish');
    expect(smallProps.find(StyledPlaylist)).toHaveLength(1);
    expect(largeProps.find(StyledTags).dive().find('span')).toHaveLength(5);
  });
});
