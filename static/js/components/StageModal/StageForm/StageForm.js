import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import CloseableForm from '../CloseableForm';


const StageFormFields = (props) => {
  let typeOptions = props.index === 0 ?
    <SelectField
      value={props.type}
      onChange={(e, k, val) => props.typeOnChange(val)} >
      <MenuItem value={'ONLINE'} primaryText="Applied Online" />
      <MenuItem value={'RECRUITER'} primaryText="Contacted by recruiter" />
    </SelectField> :
    <SelectField
      floatingLabelText="Next step:"
      value={props.type}
      onChange={(e, k, val) => props.typeOnChange(val)} >
      <MenuItem value={'OFFER'} primaryText="Offer" />
      <MenuItem value={'PHONE'} primaryText="Phone interview" />
      <MenuItem value={'ONSITE'} primaryText="Onsite" />
      <MenuItem value={'CHALLENGE'} primaryText="Coding challenge" />
      <MenuItem value={'REJECTION'} primaryText="Rejection" />
    </SelectField>

  let interviewerField = props.index === 0 ? null :
    <TextField 
      hintText="Interviewer"
      value={props.interviewer}
      onChange={(e, val) => props.interviewerOnChange(val)} />

  return (
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
        hintText="Response date"
        onChange={(e, date) => props.dateOnChange(date)} />
      <br />
    </div>
  )
}

const StageForm = (props) => (
  <CloseableForm 
    innerFields={<StageFormFields {...props} />} 
    onClose={props.onClose} />
)

export default StageForm
