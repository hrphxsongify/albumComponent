import React from 'react';
import { shallow } from 'enzyme';

import AlbumInfo from './AlbumInfo.jsx';

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

describe('AlbumInfo Album Year', () => {
  it('renders AlbumInfo Year as expected', () => {
    const component = shallow(<AlbumInfo albumInfo={albumInfo} />);
    expect(component.contains(<div className="album__year">1944</div>));
  });
});

describe('AlbumInfo Album Name', () => {
  it('renders AlbumInfo Name as expected', () => {
    const component = shallow(<AlbumInfo albumInfo={albumInfo} />);
    expect(component.contains(<div className="album__name">Bad TED Talks</div>));
  });
});

describe('AlbumInfo Album Image URL', () => {
  it('has AlbumInfo Image URL as expected', () => {
    const component = shallow(<AlbumInfo albumInfo={albumInfo} />);
    expect(
      component.contains(
        <img src="https://maxsart.s3.us-east-2.amazonaws.com/l0.jpg" alt="Bad TED Talks" />
      )
    );
  });
});
