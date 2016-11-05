import { connect } from 'react-redux';
import { addStage } from '../../actions/stages';
import StageModal from './StageModal';

const mapStateToProps = (state, ownProps) => ({

});

const StageModalContainer = connect(
  mapStateToProps,
  { onSubmit: addStage }
)(StageModal);

export default StageModalContainer;