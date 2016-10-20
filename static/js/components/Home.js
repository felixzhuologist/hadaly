import Radium from 'radium';
import React from 'react';
import TopNav from './TopNav';
import Landing from './Landing';

const styles = {
  container: {
    '@media only screen and (max-width: 450px)': {
      width: '100%',
      height: '100vh'
    },

    background: '#FF4136'
  },
};

const Home = () => (
  <div style={styles.container}>
  </div>
);

export default Radium(Home);