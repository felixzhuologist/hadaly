import { connect } from 'react-redux';
import StageForm from './StageForm';
import { updateStage } from '../../../actions/stages';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  typeOnChange(value) {
    dispatch(updateStage(ownProps.stageId, {type: value}))
  },
  interviewerOnChange(value) {
    dispatch(updateStage(ownProps.stageId, {interviewer: value}))
  },
  dateOnChange(date) {
    dispatch(updateStage(ownProps.stageId, {date: date}))
  },
  responseDateOnChange(date) {
    dispatch(updateStage(ownProps.stageid, {responseDate: date}))
  }
})

const StageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StageForm);

export default StageFormContainer;
