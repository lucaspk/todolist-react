import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const PRIORITIES = ["Low", "Medium", "High"]
const COLORS = ["gray", "orange", "red"]

const useStyles = makeStyles(theme => ({
    form: {
        paddingBottom: '1em'
    },
  }));

export const PriorityInput = (props) => { 
    const classes = useStyles()
    return  (
        <FormControl className={classes.form}>
            <InputLabel htmlFor="priority-select">Priority</InputLabel>
            <Select
                onChange={props.changeTaskPriority} 
                value={props.value}
                inputProps={
                    {
                        name: 'priority',
                        id: 'priority-select',
                    }
                }> 
                    {PRIORITIES.map((priority, index) => (
                        <MenuItem key={index} value={priority} style={{backgroundColor: COLORS[index]}}>
                            {priority}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}