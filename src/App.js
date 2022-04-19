import React from 'react'
import Header from './components/Header'
import Employees from './components/Employees'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Employees} />
            <Route exact path='/employees/new' component={NewEmployee} />
            <Route exact path='/employees/edit/:id' component={EditEmployee} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App