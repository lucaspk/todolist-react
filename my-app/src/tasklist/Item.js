import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {CustomColorCheckbox} from './taskPriority/CustomColorCheckbox'
import InputBase from '@material-ui/core/InputBase';

// item com nome editavel todolist
// editavel []
// att o nome ds que armazena a lista de tarefas []
// att no db []
const testandoSom = (text) => {
  return <InputBase id="task-name"
            defaultValue={text}
            inputProps={{ 'aria-label': 'naked' }}
          />
}

export const Item = (props) => {
    const text = props.taskname
    return (<FormGroup>
              <FormControlLabel
                control={CustomColorCheckbox(props)}
                label={testandoSom(text)}
              /> 
            </FormGroup>);
  }