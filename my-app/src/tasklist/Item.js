import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {CustomColorCheckbox} from './taskPriority/CustomColorCheckbox'

export const Item = (props) => {
    const text = props.taskname
    return (<FormGroup>
              <FormControlLabel
                control={CustomColorCheckbox(props)}
                label={text}
              /> 
            </FormGroup>);
  }