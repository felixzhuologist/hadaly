import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import StageForm from './StageForm';


class StageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState(nextProps)
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.state.handleClose();
  };

  canAddNewStep = () => {
    return true;
  };

  handleAdd = () => {
    this.state.onSubmit({
      id: this.state.jobId,
      stageType: this.state.stages.length === 0 ? "ONLINE" : "PHONE",
      date: new Date(),
      interviewer: this.state.stages.length === 0 ? null : "",
      responseDate: new Date()
    })
  };

  render = () => {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.state.handleClose} />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit} />
    ]

    const editForms = this.state.stages.map((stage, index) =>
      <StageForm {...stage} index={index} />)

    return (
      <div style={{display: 'inline-block'}} >
        <Dialog
          title="Update for Google SWE"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.state.handleClose}
          autoScrollBodyContent={true} >
          {editForms}
          <RaisedButton
            style={{marginTop: '15px', marginBottom: '5px'}}
            label="add new step"
            fullWidth={true}
            disabled={!this.canAddNewStep()} 
            onTouchTap={this.handleAdd} />
        </Dialog>
      </div>
    );
  }
}

export default StageModal;
