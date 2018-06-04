import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import TestRunsScatterplot from '../components/TestRunsScatterplot';

const config = [
  {
    type: 'pass',
    color: '#13ff05',
    stroke: 'black'
  }, {
    type: 'error',
    color: '#f97609',
    stroke: 'black'
  }, {
    type: 'fail',
    color: '#ff0000',
    stroke: 'black'
  }, {
    type: 'selectedPass',
    color: '#0bd500',
    stroke: 'black'
  }, {
    type: 'selectedError',
    color: '#ec5615',
    stroke: 'black'
  }, {
    type: 'selectedFail',
    color: '#d60000',
    stroke: 'black'
  }
];

class PlotContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plotpoints: {},
      config: config
    };

    this.handleOnTestRunSelect = this
      .handleOnTestRunSelect
      .bind(this);
  }

  createPlotPointData(plotPoints) {
    let plotPointsData = plotPoints.map((pointObject) => {
      let formattedDate = pointObject
        .start_time
        .split("T")[0];
      return {type: pointObject.status, x: formattedDate, y: pointObject.duration}
    });

    return plotPointsData;
  }
  handleOnTestRunSelect(selectedPointObject) {
    let updatedPlotPointsData = this
      .state
      .plotpoints
      .map((plotPoint) => {
        if (plotPoint.type === selectedPointObject.type && plotPoint.x === selectedPointObject.x && plotPoint.y === selectedPointObject.y) {
          switch (plotPoint.type) {
            case 'pass':
            case 'selectedPass':
              plotPoint.type = plotPoint.type === 'pass'
                ? 'selectedPass'
                : 'pass';
              break;
            case 'error':
            case 'selectedError':
              plotPoint.type = plotPoint.type === 'error'
                ? 'selectedError'
                : 'error';
              break;
            case 'fail':
            case 'selectedFail':
              plotPoint.type = plotPoint.type === 'fail'
                ? 'selectedFail'
                : 'fail';
            default:
              break;
          }
        }
        return plotPoint;
      });
    this.setState({plotpoints: updatedPlotPointsData});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plotPoints !== this.props.plotPoints) {
      this.setState({
        plotpoints: this.createPlotPointData(nextProps.plotPoints)
      });
    }
  }

  render() {
    const {plotpoints} = this.state;
    return (
      <div>
        {plotpoints && plotpoints.length > 0
          ? <TestRunsScatterplot
              data={plotpoints}
              config={config}
              onTestRunSelect={this.handleOnTestRunSelect}/>
          : null
}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {plotPoints: state.plotPoints};
};

export default connect(mapStateToProps)(PlotContainer);