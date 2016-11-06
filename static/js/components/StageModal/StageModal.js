import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ApplyForm from './ApplyForm';
import StageForm from './StageForm';


class StageModal extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      ...props,
      open: false,
    };
    this.state = this.defaultState
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.handleClose();
  };

  render = () => {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit} />
    ]

    return (
      <div style={{display: 'inline-block'}} >
        <FlatButton label="update" onTouchTap={() => this.handleOpen()} />
        <Dialog
          title="Update for Google SWE"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true} >
          <ApplyForm type="ONLINE" />
          <StageForm type="CHALLENGE" interviewer="" />
          <RaisedButton
            label="add new step"
            fullWidth={true}
            disabled={false} />
        </Dialog>
      </div>
    );
  }
}

export default StageModal;
