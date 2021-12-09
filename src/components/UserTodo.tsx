import React, { useEffect, useState } from 'react'
import { Itodo, IUser } from '../types/types'
import axios from 'axios'
import List from './List'
import TodoItem from './TodoItem'

const UserTodo = () => {
    const [todos, setTodos] = useState<Itodo[]>([])
    useEffect(() => {
        fetchTodos()
    }, [])
    async function fetchTodos() {
        try {
            const response = await axios.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {

        }
    }
    return (
        <List
        items={todos}
        renderItem={(todo:Itodo)=> <TodoItem todo={todo} key={todo.id}/>}
      />
       

    )
}

export default UserTodo
