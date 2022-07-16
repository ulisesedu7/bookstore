import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = () => {
  const percentage = 72;

  return (
    <section className="progress-circle">
      <CircularProgressbar value={percentage} className="circle-completed" />
      <div className="value-completed">
        <h3>72%</h3>
        <p>completed</p>
      </div>
    </section>
  );
};

export default ProgressCircle;
