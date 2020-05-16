import React, { Component } from 'react';
import { bindACtionCreators } from 'redux';
import React, { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './containers/flats';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();

    function mapDisatchToProps(dispatch) {
      return bindActionCreators(
        { setFlats: setFlats },
        dispatch
      );
    }

    function mapStateToProps(state) {
      return {
        flats: state.flats
      };
    }
  }

  render () {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat  flat={flat} key={flat.name} />
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
