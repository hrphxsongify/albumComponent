import React from 'react';
import { shallow } from 'enzyme';

import TrackContainer from './TrackContainer.jsx';

const albumInfo = {
  name: 'Bad TED Talks',
  year: 1944,
  tracks: [
    {
      title: 'leading-edge integrate deliverables',
      number: 1,
      length: '10:39',
      explicit: 1,
      popularity: 1
    },
    {
      title: 'mission-critical empower e-markets',
      number: 2,
      length: '17:56',
      explicit: 1,
      popularity: 1
    },
    {
      title: 'bricks-and-clicks synthesize interfaces',
      number: 3,
      length: '16:45',
      explicit: 0,
      popularity: 0
    },
    { title: 'virtual harness channels', number: 4, length: '6:15', explicit: 1, popularity: 0 },
    {
      title: 'impactful unleash infrastructures',
      number: 5,
      length: '6:14',
      explicit: 1,
      popularity: 0
    },
    {
      title: '24/365 streamline deliverables',
      number: 6,
      length: '9:38',
      explicit: 0,
      popularity: 0
    }
  ],
  id: 0,
  name: 'user-centric channels',
  artist: 'Intuitive neural-net',
  genre: 'Boring'
};

describe('Track Container', () => {
  it('renders the required amount of tracks as expected', () => {
    const component = shallow(
      <TrackContainer tracks={albumInfo.tracks} artist={albumInfo.artist} />
    );
    expect(component.find('div')).toHaveLength(8);
  });
});
