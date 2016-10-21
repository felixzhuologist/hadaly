import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

class AddJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
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
        onTouchTap={this.handleClose} />
    ]

    return (
      <div>
        <FlatButton label="Add new job" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add New Job"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
            Company Name: <TextField hintText="Hooli"/><br />
            Job Title: <TextField hintText="Innovation Engineer"/><br />
            URL: <TextField hintText="http://www.hooli.xyz/jobs/swe"/><br />
            Contact: <TextField hintText="gbels@hoolimail.xyz"/><br />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default AddJobModal;