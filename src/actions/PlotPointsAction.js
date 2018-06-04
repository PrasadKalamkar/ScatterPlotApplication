import 'whatwg-fetch';
import * as constants from '../constants/actionTypes';

const apiUrl = 'http://localhost:3000/PlotPoints';

export const fetchPlotPointsSuccess = (plotPoints) => {
  return {type: constants.FETCH_PLOTPOINTS_SUCCESS, plotPoints};
};

export const fetchPlotPoints = () => {
  return (dispatch) => {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    })
      .then(function (json) {
        dispatch(fetchPlotPointsSuccess(json));
      })
      .catch(error => {
        throw(error);
      });
  };
};