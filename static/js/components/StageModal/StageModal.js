import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ApplyForm from './ApplyForm';
import StageForm from './StageForm';


class StageModal extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      ...props,
      open: false,
      type: 'PHONE',
      interviewer: '',
      date: '',
      responseDate: '',
      description: '',

      // Don't show error message if user hasn't done anything
      companyUntouched: true,
      titleUntouched: true,

      pass: true,
    };
    this.state = this.defaultState
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleSubmit() {
    if (this.state.company !== '' && this.state.title !== '') {
      this.props.onSubmit(this.state);
      this.handleClose();
      this.setState(this.defaultState);
    } else {
      this.setState({
        companyUntouched: false, 
        titleUntouched: false
      });
    }
  };

  render() {
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
        </Dialog>
      </div>
    );
  }
}

export default StageModal;
