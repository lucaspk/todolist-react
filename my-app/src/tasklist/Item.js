import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {getPriorityColor} from './taskPriority/PriorityColors'
import Divider from '@material-ui/core/Divider'

export const Item = (props) => {
    const text = props.taskname
    return (<FormGroup>
              <FormControlLabel
                control={getPriorityColor(props)}
                label={text}
              /> 
              <Divider />
            </FormGroup>);
  }