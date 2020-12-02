import React from 'react';
import './LoadingSpinner.scss'
import spinner from '../../assets/img/spinner.svg'

const LoadingSpinner = () => {
  return (
    <img src={spinner} alt="" className="loading-spinner" />
  );
};

export default LoadingSpinner;