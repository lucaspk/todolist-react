import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { grey, orange, red } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

//tentar manipular essa declaração para evitar repetição de código.
//criar uma tag genérica que especifico a cor no parâmetro
export const GreyCheckbox = withStyles({
    root: {
      color: grey[600],
      '&$checked': {
        color: grey[800],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);
  
  
export const OrangeCheckbox = withStyles({
    root: {
      color: orange[600],
      '&$checked': {
        color: orange[800],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);
  
  
export const RedCheckbox = withStyles({
    root: {
      color: red[600],
      '&$checked': {
        color: red[800],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />); // ... significa um ou mais params/elems


export const getPriorityColor = (props) => {
    const color = props.bgcolor
    if (color === "gray") {
      return <GreyCheckbox 
                onChange={props.removeTask} 
                inputProps={{'aria-label': 'primary checkbox' }} 
                value="checkedA" 
              />
    } else if (color === "orange") {
      return <OrangeCheckbox 
                onChange={props.removeTask} 
                inputProps={{'aria-label': 'primary checkbox' }} 
                value="checkedA" 
              />
    } else if (color === "red") {
      return <RedCheckbox 
                onChange={props.removeTask} 
                inputProps={{'aria-label': 'primary checkbox' }} 
                value="checkedA" 
              />
    }
  }