import React from 'react';
import { ReactComponent as SpinLoader } from '../../assets/img/tail-spin.svg';

const loaderStyles = {
  width: '24px',
  height: '24px'
};

const LoaderComponent = () => {
  return <SpinLoader style={{ ...loaderStyles }} />
}

export default LoaderComponent;