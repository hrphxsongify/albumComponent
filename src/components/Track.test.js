import React from 'react';
import { shallow } from 'enzyme';

import Track from './Track.jsx';

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
    }
  ],
  id: 0,
  name: 'user-centric channels',
  artist: 'Intuitive neural-net',
  genre: 'Boring'
};

describe('Render a Track', () => {
  it('renders Track Popularity as expected', () => {
    const component = shallow(<Track track={albumInfo.tracks[0]} artist={albumInfo.artist} />);
    expect(
      component.contains(
        <div className="track__popularity">
          <i className="ion-arrow-graph-up-right"></i>
        </div>
      )
    );
  });
});

describe('Render a Track', () => {
  it('renders Track Expicit Tag as expected', () => {
    const component = shallow(<Track track={albumInfo.tracks[0]} artist={albumInfo.artist} />);
    expect(
      component.contains(
        <div className="track__explicit">
          <span className="label">'Explicit'</span>
        </div>
      )
    );
  });
});

describe('Render a Track', () => {
  it('renders Track Title as expected', () => {
    const component = shallow(<Track track={albumInfo.tracks[0]} artist={albumInfo.artist} />);
    expect(component.contains(<span className="title">leading-edge integrate deliverables</span>));
  });
});

describe('Render a Track', () => {
  it('renders Track Artist as expected', () => {
    const component = shallow(<Track track={albumInfo.tracks[0]} artist={albumInfo.artist} />);
    expect(component.contains(<span className="feature">Intuitive neural-net</span>));
  });
});

describe('Render a Track', () => {
  it('renders Track Length as expected', () => {
    const component = shallow(<Track track={albumInfo.tracks[0]} artist={albumInfo.artist} />);
    expect(component.contains(<div className="track__length">10:39</div>));
  });
});
