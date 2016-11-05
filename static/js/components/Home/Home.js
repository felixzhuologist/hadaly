import Radium from 'radium';
import React from 'react';
import JobModal from '../JobModal';
import CompanyCard from '../CompanyCard';
import * as api from '../../api'

const styles = {
  outerContainer: {
    '@media only screen and (max-width: 450px)': {
      width: '100%',
      height: '100vh',
    },
  },
};

const Home = ({ jobIds }) => (
  <div style={styles.outerContainer}>
    {jobIds.map(jobId => <CompanyCard jobId={jobId} key={jobId} />)}
    <JobModal />
  </div>
);

export default Radium(Home);