import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    if (this.props.selectedFlat) {
      marker = <div
      style={{ width: '20px', height: '20px',
      backgroundColor: 'red',
      borderRadius: '50%' }}
      lat={this.props.selectedFlat.lat}
      lng={this.props.selectedFlat.lng} />;
      center = { lat: this.props.selectedFlat.lat,
      lng: this.props.selectedFlat.lng };
    }
  }

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

return (
  <div className="col-sm-5" style={{height: '100vh'}}>
    <GoogleMapReact
      center={center}
      defaultZoom={15}>
      {marker}
    </GoogleMapReact>
    </div>
  );

export default connect(mapStateToProps)(Map);;
