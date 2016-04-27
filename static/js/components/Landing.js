import React from 'react';
import {cyanA700} from 'material-ui/lib/styles/colors';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
    height: '60vh',
    backgroundColor: cyanA700,
  },
  h: {
    color: 'white'
  },
};

const Landing = () => (
  <div style={Object.assign(styles.container, styles.h)}>
    <h1> Hadaly </h1>
    <h2> Track your job or school applications the right way </h2>
  </div>
);

export default Landing;