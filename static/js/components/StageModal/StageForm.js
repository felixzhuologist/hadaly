import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


const StageForm = (props) => (
  <div>
    <SelectField
      floatingLabelText="Next steps:"
      value={props.type}
      onChange={(e, k, val) => props.typeOnChange(val)} >
      <MenuItem value={'OFFER'} primaryText="Offer" />
      <MenuItem value={'PHONE'} primaryText="Phone interview" />
      <MenuItem value={'ONSITE'} primaryText="Onsite" />
      <MenuItem value={'CHALLENGE'} primaryText="Coding challenge" />
      <MenuItem value={'REJECTION'} primaryText="Rejection" />
    </SelectField>
    <br />

    <DatePicker 
      hintText="Date" 
      onChange={(e, date) => props.dateOnChange(date)} />
    <br />

    <TextField 
      hintText="Interviewer"
      value={props.interviewer}
      onChange={(e, val) => props.interviewerOnChange(val)} />
    <br />

    <DatePicker 
      hintText="Response date" 
      onChange={(e, date) => props.responseOnChange(date)} />
  </div>
)

export default StageForm