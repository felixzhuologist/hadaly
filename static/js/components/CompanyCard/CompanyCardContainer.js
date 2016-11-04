import { connect } from 'react-redux';
import CompanyCard from './CompanyCard';
import { getStagesForJob } from '../../reducers/stages'

const mapStateToProps = (state, ownProps) => {
  let jobId = ownProps.jobId
  return {
    ...state.jobs.jobsById[jobId],
    stages: getStagesForJob(state, jobId)
  }
}

const CompanyCardContainer = connect(
  mapStateToProps,
  {}
)(CompanyCard);

export default CompanyCardContainer