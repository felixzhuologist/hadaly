import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AppForm = (props) => (
  <div>
    <SelectField
      value={props.type}
      onChange={(e, k, val) => props.typeOnChange(val)} >
      <MenuItem value={'ONLINE'} primaryText="Applied Online" />
      <MenuItem value={'RECRUITER'} primaryText="Contacted by recruiter" />
    </SelectField>
    <br />


    <DatePicker 
      hintText="Date" 
      onChange={(e, date) => props.dateOnChange(date)} />
    <br />

    <DatePicker
      hintText="Response on"
      onChange={(e, date) => props.dateOnChange(date)} />
    <br />     
  </div>
)

export default AppForm