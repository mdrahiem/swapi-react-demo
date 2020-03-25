import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ReactComponent as R2Icon } from '../assets/img/r2d2.svg';
import { ReactComponent as PokemonIcon } from '../assets/img/pokemon.svg';
import LoaderComponent from './common/loaderComponent';
import CustomTooltip from './common/customTooltipComponent';
import { removeCommaFromString } from '../utils/appUtils';
import styles from './chartComponent.module.scss';

const ChartComponent = props => {
  const { chartData = [] } = props;
  const formattedChartData = chartData.length > 0 ?
      chartData.map(data => {
        const { height = '', mass = '', name = '', gender = '' } = data;
        if (
          // to check whether the value is 'unknown' sometimes
          height !== null && height !== 'unknown'
          && mass !== null && mass !== 'unknown'
          ) {
          return {
            height: removeCommaFromString(height),  // removing commas if there are any
            mass: removeCommaFromString(mass),
            name,
            gender
          };
        } else {
          return {}
        }
      }) : [];
  
  // this check is for only first object.
  // if there are more than one we are not showing empty object
  // and showing the rest of object on the graph
  const dataHasEmptyObject = data => {
    if (data.length === 1) {
      return Object.keys(data[0]).length === 0;
    }
    return false;
  }
  return (
    <div className={styles['chart-container']}>
      <div className="chart-inner-container">
        {
          props.peopleLoading ?
            <div className="loader"><LoaderComponent /></div> :
              props.chartData.length > 0 ?
                dataHasEmptyObject(formattedChartData) ?    // check whether data has empty object
                  <div className="no-chart-data">
                    <p>
                      <PokemonIcon className="no-chart-icon" />
                      <span>There is only Pokemon here!</span>
                      Please select a specie type to see the list of people!
                    </p>
                  </div> :
                  <ResponsiveContainer>
                    <ScatterChart
                      width={400}
                      height={400}
                      margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                      }}
                    >
                      <XAxis
                        type="number"
                        dataKey="height"
                        name="Height"
                        unit=""
                        stroke="#ffffff"
                        strokeWidth={1}
                        label={{ value: 'Height', position: 'bottom', fill: '#ffffff' }}
                      />
                      <YAxis
                        type="number"
                        dataKey="mass"
                        name="Mass"
                        unit=""
                        stroke="#ffffff"
                        strokeWidth={1}
                        label={{ value: 'Mass', angle: -90, position: 'insideLeft', fill: '#ffffff' }}
                      />
                      <Tooltip
                        cursor={{ stroke: 'red', strokeWidth: 0 }}
                        content={<CustomTooltip />}
                      />
                      <Scatter
                        name="A school"
                        data={formattedChartData}
                        fill="#00e1ff"
                        stroke="#00e1ff"
                        strokeWidth={10}
                      >
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer> :
                <div className="no-chart-data">
                  <p>
                    <R2Icon className="no-chart-icon" />
                    <span>There are no people yet.</span>
                    Please select a specie type to see the list of people!
                  </p>
                </div>
        }
      </div>
    </div>
  );
}

export default ChartComponent;