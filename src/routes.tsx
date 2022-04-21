import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Careers from './Pages/Careers'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Porfolio from './Pages/Portfolio'
import Services from './Pages/Services'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/portfolio' element={<Porfolio />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/services' element={<Services />} />
      <Route path='*' element={<NotFound />} />
    </Switch>
  )
}

export default Routes
