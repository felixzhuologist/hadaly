import { connect } from 'react-redux';
import CompanyCard from './CompanyCard';
import { getStagesForJob } from '../../reducers/stages'
import { deleteJob } from '../../actions/jobs'

const mapStateToProps = (state, ownProps) => {
  let jobId = ownProps.jobId
  return {
    ...state.jobs.jobsById[jobId],
    stages: getStagesForJob(state, jobId)
  }
}

const CompanyCardContainer = connect(
  mapStateToProps,
  { deleteJob }
)(CompanyCard);

export default CompanyCardContainer