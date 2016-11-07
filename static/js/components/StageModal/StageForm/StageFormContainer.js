import { connect } from 'react-redux';
import StageForm from './StageForm';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const StageFormContainer = connect(
  mapStateToProps,
  {}
)(StageForm);

export default StageFormContainer;