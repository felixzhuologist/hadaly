import React from 'react';
import TopNav from './TopNav';
import Landing from './Landing';

const styles = {
  container: {
    height: '100%',
  },
};

const Home = () => (
  <div style={styles.container}>
    <TopNav/>
    <Landing/>
  </div>
);

export default Home;