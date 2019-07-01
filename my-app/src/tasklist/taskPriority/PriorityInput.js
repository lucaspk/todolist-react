import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {PrioritySelect} from './PrioritySelect';

const renderSelectPriority = (props) => {
    const PRIORITIES = ["Low", "Medium", "High"]
    const COLORS = ["gray", "orange", "red"]
    return <PrioritySelect 
                onChange={props.changeTaskPriority} 
                priority={props.priority}
                PRIORITIES={PRIORITIES}
                COLORS={COLORS}
            />
}

export const PriorityInput = (props) => { 
    return  (
        <FormControl>
            <InputLabel htmlFor="priority-select">Priority</InputLabel>
            {renderSelectPriority(props)}
        </FormControl>
    )
}