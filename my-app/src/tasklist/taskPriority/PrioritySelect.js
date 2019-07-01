import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const renderPrioritySelect = (props) => {
    let priority = props.priority
    let idx = props.PRIORITIES.indexOf(priority)

    return  <Select style={{backgroundColor: props.COLORS[idx], paddingLeft:"0.5em"}}
                onChange={props.onChange} 
                value={priority}
                inputProps={{ name: 'priority', id: 'priority-select' }}> 
                    {
                        props.PRIORITIES.map((currPriority, index) => (
                        <MenuItem key={index} value={currPriority} style={{backgroundColor: props.COLORS[index]}}>
                            {currPriority}
                        </MenuItem>
                        ))
                    }
            </Select>
}

export const PrioritySelect = (props) => {
    return (
        <FormControl>
            <InputLabel htmlFor="priority-select">Priority</InputLabel>
            {renderPrioritySelect(props)}
        </FormControl>
    )
}