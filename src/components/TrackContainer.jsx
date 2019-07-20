import React from 'react';
import TrackHeading from './TrackHeading.jsx';
import Track from './Track.jsx';

const TrackContainer = ({ tracks, artist }) => {
  return (
    <div className="album__tracks">
      <div className="tracks">
        <TrackHeading />
        {tracks.map(track => (
          <div className="a_Track" key={track.number}>
            <Track track={track} artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackContainer;
