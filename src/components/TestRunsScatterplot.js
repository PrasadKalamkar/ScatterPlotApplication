import React from 'react';
import PropTypes from 'prop-types';
import {ScatterplotChart} from 'react-easy-chart';

const TestRunsScatterplot = (props) => {
  const {data, config, onTestRunSelect} = props;
  return (<ScatterplotChart
    data={data}
    config={config}
    axes
    yDomainRange={[0, 300]}
    dotRadius={10}
    width={1000}
    height={500}
    xType="text"
    clickHandler={onTestRunSelect}/>);
};

TestRunsScatterplot.propTypes = {
  data: PropTypes.array,
  config: PropTypes.array,
  onTestRunSelect: PropTypes.func
};

export default TestRunsScatterplot;