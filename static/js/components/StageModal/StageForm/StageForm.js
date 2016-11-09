import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import CloseableForm from '../CloseableForm';


const styles = {
  fieldStyle: {
    width: '80%',
    overflow: 'hidden',
    margin: 'auto',
  },
  selectStyle: {
    left: '10%',
  }
}

const dateInFuture = (date) => date > (new Date())

const StageFormFields = (props) => {
  console.log(props.responseDate);

  const typeOptions = props.index === 0 ?
    <SelectField value={props.type}
                  onChange={(e, k, val) => props.typeOnChange(val)} 
                  style={Object.assign({}, styles.fieldStyle, styles.selectStyle)} >
      <MenuItem value={'ONLINE'} primaryText="Applied Online" />
      <MenuItem value={'RECRUITER'} primaryText="Contacted by recruiter" />
    </SelectField> :
    <SelectField floatingLabelText="Next step:"
                  value={props.type}
                  onChange={(e, k, val) => props.typeOnChange(val)} 
                  style={Object.assign({}, styles.fieldStyle, styles.selectStyle)} >
      <MenuItem value={'OFFER'} primaryText="Offer" />
      <MenuItem value={'PHONE'} primaryText="Phone interview" />
      <MenuItem value={'ONSITE'} primaryText="Onsite" />
      <MenuItem value={'CHALLENGE'} primaryText="Coding challenge" />
      <MenuItem value={'REJECTION'} primaryText="Rejection" />
    </SelectField>

  const interviewerField = props.index === 0 ? null :
    <TextField 
      hintText="Interviewer"
      value={props.interviewer}
      style={styles.fieldStyle}
      onChange={(e, val) => props.interviewerOnChange(val)} />

  const responseDateField = props.isUnaryStage ? null :
    <div>
      <Checkbox label="Heard back?"
                labelPosition="left" 
                checked={props.checked}
                onCheck={(e, isChecked) => props.checkedOnChange(isChecked)} />

      On:
      <DatePicker
        hintText="Response date"
        style={styles.fieldStyle}
        disabled={!props.checked}
        onChange={(e, date) => props.responseDateOnChange(date)} 
        shouldDisableDate={(date) => date < props.date || dateInFuture(date)}  />
      <br />
    </div>

  return (
    <div>
      {typeOptions}
      <br />

      On: 
      <DatePicker 
        hintText="Date" 
        defaultDate={props.date}
        style={styles.fieldStyle}
        onChange={(e, date) => props.dateOnChange(date)}
        shouldDisableDate={(date) => {
          let isInitialStage = props.type == 'ONLINE' || props.type == 'RECRUITER'
          return isInitialStage && dateInFuture(date)
        }} />
      <br />

      {responseDateField}
    </div>
  )
}

const StageForm = (props) => (
  <CloseableForm 
    innerFields={<StageFormFields {...props} />} 
    onClose={props.onClose} />
)

export default StageForm
