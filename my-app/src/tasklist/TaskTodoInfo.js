import React from 'react'

const defaultTodoMsg = (props) => {
    return <h2>You have {props.len} tasks to complete.</h2>
}

const noTasksTodo = () => {
    return <h2>You have no tasks to complete. Enjoy your day!</h2>
}

const oneTaskTodo = () => {
    return <h2>You have 1 task to complete.</h2>
}

export const TaskTodoInfo = (props) => {
    let msg = defaultTodoMsg(props)
    if (props.len === 0) {
        msg = noTasksTodo()
    } else if (props.len === 1) {
        msg = oneTaskTodo()
    }
    return msg
}