import Radium from 'radium';
import React from 'react';
import TopNav from './TopNav';
import Landing from './Landing';
import AddJobModalContainer from './AddJobModalContainer';
import CompanyCard from './CompanyCard';
import * as api from '../api'

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
    <AddJobModalContainer />
    <CompanyCard {...api.googleInfo} />
  </div>
);

export default Radium(Home);