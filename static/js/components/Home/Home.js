import Radium from 'radium';
import React from 'react';
import AddJobModalContainer from '../AddJobModalContainer';
import CompanyCard from '../CompanyCard';
import * as api from '../../api'

const styles = {
  container: {
    '@media only screen and (max-width: 450px)': {
      width: '100%',
      height: '100vh',
    },
  },
};

const Home = ({ jobIds }) => (
  <div style={styles.container}>
    {jobIds.map(jobId => <CompanyCard jobId={jobId} key={jobId} />)}
    <AddJobModalContainer />
  </div>
);

export default Radium(Home);