import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {getPriorityColor} from './taskPriority/PriorityColors'

export const Item = (props) => {
    const text = props.taskname
    return (<FormGroup row>
              <FormControlLabel
                control={getPriorityColor(props)}
                label={text}
              /> 
            </FormGroup>);
  }