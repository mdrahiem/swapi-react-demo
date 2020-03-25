import React from 'react';
import styles from './customTooltip.module.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className={styles['custom-tooltip']}>
        <p className="label"><span>Name</span>{payload[0].payload.name}</p>
        <p className="label"><span>Gender</span>{payload[1].payload.gender}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;