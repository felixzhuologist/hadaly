import Radium from 'radium';
import React from 'react';
import TopNav from './TopNav';
import Landing from './Landing';
import AddJobModal from './AddJobModal';

const styles = {
  container: {
    '@media only screen and (max-width: 450px)': {
      width: '100%',
      height: '100vh',
    },
  },
};

const Home = () => (
  <div style={styles.container}>
    <AddJobModal />
  </div>
);

export default Radium(Home);