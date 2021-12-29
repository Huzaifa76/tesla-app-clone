import React from 'react'
import './index.css'
import Home from './Components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Model from './Components/Model'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    < >
    <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Home} ></Route>
     <Route exact path='/model-s' component={Model} ></Route>
   </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
