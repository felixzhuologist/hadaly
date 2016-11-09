import { connect } from 'react-redux';
import StageForm from './StageForm';
import { updateStage } from '../../../actions/stages';
import { isUnaryStage } from '../../../reducers/stages';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  checked: ownProps.responseDate !== null,
  isUnaryStage: isUnaryStage(ownProps)
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
    dispatch(updateStage(ownProps.stageId, {responseDate: date}))
  },
  checkedOnChange(isChecked) {
    dispatch(updateStage(ownProps.stageId, 
                          {responseDate: isChecked ? new Date() : null}))
  }
})

const StageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StageForm);

export default StageFormContainer;
