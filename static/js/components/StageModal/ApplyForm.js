import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import CloseableForm from './CloseableForm';


const AppFormFields = (props) => (
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

const AppForm = (props) => (
  <CloseableForm 
    innerFields={<AppFormFields {...props} />} 
    onClose={props.onClose} />
)

export default AppForm
