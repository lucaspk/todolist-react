import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {getCustomCheckbox} from './taskPriority/CustomColorCheckbox'

export const Item = (props) => {
    const text = props.taskname
    return (<FormGroup>
              <FormControlLabel
                control={getCustomCheckbox(props)}
                label={text}
              /> 
            </FormGroup>);
  }