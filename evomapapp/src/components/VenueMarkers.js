import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { sites } = props;
  const markers = sites.map((sites, index) => (
    <Marker key={index} position={[sites.lat, sites.lng]} icon={VenueLocationIcon} >
      <MarkerPopup data={sites}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;
