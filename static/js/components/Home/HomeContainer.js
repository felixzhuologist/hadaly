import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  jobIds: state.jobs.allJobIds
})

const HomeContainer = connect(
  mapStateToProps,
  {}
)(Home);

export default HomeContainer