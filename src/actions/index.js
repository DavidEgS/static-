import flats from '../flats';

export function setFlats() {
  //TODO: API call

  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export function selectFlat(flat) {

  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}
