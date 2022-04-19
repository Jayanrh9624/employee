import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_EMPLOYEE,
  BEGIN_EMPLOYEES_DOWNLOAD,
  RETRIEVE_EMPLOYEE_DELETE,
  BEGIN_EDIT_EMPLOYEE,
} from '../types'

import {
  downloadEmployeesOkAction,
  downloadEmployeesErrorAction,
  addEmployeeOkAction,
  addEmployeeErrorAction,
  deleteEmployeeOkAction,
  deleteEmployeeErrorAction,
  editEmployeeOkAction,
  editEmployeeErrorAction
} from '../actions/employees-actions'

import {
  retrieveEmployeesDB,
  addEmployeeDB,
  deleteEmployeeDB,
  editEmployeeDB
} from '../api-calls'


function* retrieveEmployees() {
  try {
    const {data} = yield call(retrieveEmployeesDB)
    yield downloadEmployeesOkAction(data)
  } catch (error) {
    yield put(downloadEmployeesErrorAction())
  }
}


function* retrieveEmployeesSaga() {
  yield takeEvery(BEGIN_EMPLOYEES_DOWNLOAD, retrieveEmployees)
}


function* addEmployee(action) {
  const employee = action.employee
  try {
    yield call(addEmployeeDB, employee)
 
    yield addEmployeeOkAction(employee) 
    
    Swal.fire({
      title: 'Added!',
      text: 'The employee has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield addEmployeeErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.'
    })
  }
}

function* addEmployeeSaga() {
  yield takeEvery(ADD_EMPLOYEE, addEmployee)
}



function* deleteEmployee(action) {
  const id = action.payload
  try {
    yield call(deleteEmployeeDB, id)
    yield deleteEmployeeOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The employee has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteEmployeeErrorAction()
  }
}


function* deleteEmployeeSaga() {
  yield takeEvery(RETRIEVE_EMPLOYEE_DELETE, deleteEmployee)
}



function* editEmployee(action) {
  const employee = action.employee
  try {
    yield call(editEmployeeDB, employee)
    yield editEmployeeOkAction(employee)
    
    Swal.fire({
      title: 'Updated!',
      text: 'The employee has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editEmployeeErrorAction()
  }
}


function* editEmployeeSaga() {
  yield takeEvery(BEGIN_EDIT_EMPLOYEE, editEmployee)
}


export default function* rootSaga() {
  yield all([
    retrieveEmployeesSaga(),
    addEmployeeSaga(),
    deleteEmployeeSaga(),
    editEmployeeSaga()
  ])
}
