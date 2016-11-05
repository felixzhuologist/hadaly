import { connect } from 'react-redux';
import { addJob } from '../../actions/jobs';
import JobModal from './JobModal';

const mapStateToProps = (state, ownProps) => ({

});

const JobModalContainer = connect(
  mapStateToProps,
  { onSubmit: addJob }
)(JobModal);

export default JobModalContainer;