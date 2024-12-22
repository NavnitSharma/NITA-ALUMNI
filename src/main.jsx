import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Event from './components/Event/Event.jsx'
import Initiative from './components/Initiative/Initiative.jsx'
import Team from './components/Team/Team.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route path='/home' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/event' element={<Event/>} />
     <Route path='/initiative' element={<Initiative/>} />
     <Route path='/team' element={<Team/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
