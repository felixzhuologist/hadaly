import { connect } from 'react-redux';
import { addJob } from '../actions/jobs';
import AddJobModal from './AddJobModal';

const mapStateToProps = (state, ownProps) => ({

});

const AddJobModalContainer = connect(
  mapStateToProps,
  { onSubmit: addJob }
)(AddJobModal);

export default AddJobModalContainer;