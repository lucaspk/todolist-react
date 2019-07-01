import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

export const CustomColorCheckbox = (props) => {
  return  <Checkbox 
            style={{color: props.bgcolor}} 
            onChange={props.removeTask}
          />
}