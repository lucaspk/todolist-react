import React from 'react'

export const TaskTodoInfo = (props) => {
    let msg = <h2>You have {props.len} tasks to complete.</h2>
    if (props.len === 0) {
        msg = <h2>You have no tasks. Enjoy you day!</h2>
    } else if (props.len === 1) {
        msg = <h2>You have {props.len} task to complete.</h2>
    }
    return msg
}