import { combineReducers } from 'redux'
import employeesReducer from './employees-reducer'
import alertReducer from './alert-reducer'

export default combineReducers({
  employees: employeesReducer,
  alert: alertReducer
})


