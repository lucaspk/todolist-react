import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

export const getCustomCheckbox = (props) => {
  return  <Checkbox 
            style={{color: props.bgcolor}} 
            onChange={props.removeTask}
          />
}