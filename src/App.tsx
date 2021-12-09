import React, { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { Itodo, IUser } from './types/types'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'
import { BrowserRouter,Link} from 'react-router-dom'
import {  Route, Routes } from 'react-router'
import UserPage from './components/UserPage'
import UserTodo from './components/UserTodo'

const App = () => {



  return (
    <BrowserRouter>
      <div >
        <div>
          <Link to='/users'> Пользователи</Link>
          <Link to='/todos'> Список дел</Link>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
            
          <Route path={'/todos'} element={ <UserTodo />} />

        </Routes>


      </div>
    </BrowserRouter>

  )
}

export default App