import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const getCustomCheckbox = (props) => {
  return  <Checkbox 
            style={{color: props.bgcolor}} 
            onChange={props.removeTask}
          />
}

export const getPriorityColor = (props) => {
    return getCustomCheckbox(props)
  }