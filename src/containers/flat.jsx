import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

const Flat = (props) => {
  const handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  let classes = "flat card-product";
  if (this.props.flat === this.props.selectedFlat) {
    classes += " selected";
  }

  return (
    <div className={classes} onClick={this.handleClick}>
      { this.props.flat.name }
    </div>
  );

  function mapStateToProps(state) {
    return {
      selectedFlat: state.selectedFlat
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { selectFlat: selectFlat }, dispatch);
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(Flat);
