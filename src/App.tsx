import React, { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { Itodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<Itodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {

    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {

    }
  }


  return (
    <div style={{background:'lightGray'}}>
      <EventsExample/>
      <Card onClick={(num) => console.log('ddf', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
      <List
        items={users}
        renderItem={(user:IUser)=> <UserItem user={user} key={user.id}/>}
      />
      <List
        items={todos}
        renderItem={(todo:Itodo)=> <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  )
}
