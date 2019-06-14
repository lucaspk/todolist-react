import React from 'react'

const PRIORITIES = ["Low", "Medium", "High"]
const COLORS = ["gray", "orange", "red"]

export const PriorityInput = (props) => { //falta definir option padrão que tem o nome "Select the priority"
    return <select
            onChange={props.changeTaskPriority} 
            value={props.value}> 
            {PRIORITIES.map((priority, index) => (
            <option key={index} value={priority} style={{backgroundColor: COLORS[index]}}>
                {priority}
            </option>
            ))}
        </select>
}