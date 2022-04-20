import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Careers from './components/Pages/Careers'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'
import Porfolio from './components/Pages/Porfolio'
import Services from './components/Pages/Services'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/porfolio' element={<Porfolio />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/services' element={<Services />} />
      <Route path='*' element={<NotFound />} />
    </Switch>
  )
}

export default Routes
