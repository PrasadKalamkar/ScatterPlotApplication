import * as constants from '../constants/actionTypes';

export default(state = [], action) => {
  switch (action.type) {
    case constants.FETCH_PLOTPOINTS_SUCCESS:
      return action.plotPoints;
    default:
      return state;
  }
};