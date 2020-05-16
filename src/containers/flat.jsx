import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

const Flat = (props) => {
  const handleClick = () => {
    props.selectFlat(props.flat);
  };

  let classes = "flat card-product";
  if (props.flat === props.selectedFlat) {
    classes += " selected";
  }

  return (
    <div className={classes} onClick={handleClick}>
      { props.flat.name }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat }, dispatch
  );
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Flat);
