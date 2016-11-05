import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';


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
        >
          <div>
            <DatePicker style={{marginBottom: '10px'}} hintText="When did you hear back?" />

            <Checkbox
              label="Did you pass?"
              labelPosition="left"
              checked={this.state.pass}
              onCheck={(e, checked) => {this.setState({pass: checked})}}
            />
            <br />

            <SelectField
              floatingLabelText="Next steps:"
              value={this.state.type}
              disabled={!this.state.pass}
              onChange={() => console.log('ay')} 
            >
              <MenuItem value={'OFFER'} primaryText="Offer" />
              <MenuItem value={'PHONE'} primaryText="Phone interview" />
              <MenuItem value={'ONSITE'} primaryText="Onsite" />
              <MenuItem value={'CHALLENGE'} primaryText="Coding challenge" />
            </SelectField>
            <br />


            <DatePicker 
              hintText="Date" 
              disabled={!this.state.pass} />
            <br />

            <TextField 
              hintText="Interviewer"
              disabled={!this.state.pass}
              value={''}
              onChange={(e) => {}} />
            <br />           
          </div>
        </Dialog>
      </div>
    );
  }
}

export default StageModal;
