import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      open: false,
      company: '',
      title: '',
      url: '',
      contact: '',
      notes: '',
      // Don't show error message if user hasn't done anything
      companyUntouched: true,
      titleUntouched: true
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

    const floatingButtonStyles = {
      position: 'fixed',
      bottom: '15%',
      left: '50%',
      transform: 'translate(-50%)'
    }

    return (
      <div>
        <FloatingActionButton style={floatingButtonStyles} 
                              onTouchTap={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add New Job"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
            Company Name:
            <TextField 
              hintText="Hooli" 
              errorText={
                this.state.company == "" && !this.state.companyUntouched ? 
                "This field is required" : null}
              value={this.state.company}
              onChange={(e) => {this.setState({
                company: e.target.value, 
                companyUntouched: false})}} />
            <br />
            Job Title: 
            <TextField 
              hintText="Innovation Engineer" 
              value={this.state.title}
              errorText={
                this.state.title == "" && !this.state.titleUntouched ? 
                "This field is required" : null}
              onChange={(e) => {this.setState({
                title: e.target.value, 
                titleUntouched: false})}} />
            <br />
            URL: 
            <TextField 
              hintText="http://www.hooli.xyz/jobs/swe"
              value={this.state.url}
              onChange={(e) => {this.setState({url: e.target.value})}} />
            <br />
            Contact:
            <TextField 
              hintText="gbels@hoolimail.xyz"
              value={this.state.contact}
              onChange={(e) => {this.setState({contact: e.target.value})}} />
            <br />
            Notes:
            <TextField 
              hintText="Super innovative company"
              value={this.state.notes}
              onChange={(e) => {this.setState({notes: e.target.value})}}
              multiLine={true} />
            <br />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default AddJobModal;
