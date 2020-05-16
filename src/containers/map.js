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

    const { selectedFlat } = this.props;

    if (selectedFlat) {
      const marker = <div style={style} lat={selectedFlat.lat} lng={selectedFlat.lng} />;
      const center = {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng
      };
    }

    return (
      <div className="col-sm-5" style={{ height: '100vh' }}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedFlat: state.selectedFlat };
};

export default connect(mapStateToProps)(Map);
