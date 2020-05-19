import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    const style = {
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      borderRadius: '50%'
    };

    const { selectedFlat, flats } = this.props;

    let marker = null;
    let center = {
      lat: 48.884211,
      lng: 2.34689
    };

    if (selectedFlat) {
      marker = <div style={style} lat={selectedFlat.lat} lng={selectedFlat.lng} />;
      center = {
        lat: flats[0].lat,
        lng: flats[0].lng
      };
    }

    return (
      <div className="col-sm-5" style={{ height: '100vh' }}>
        <GoogleMapReact center={center} defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedFlat: state.selectedFlat, flats: state.flats };
};

export default connect(mapStateToProps)(Map);
