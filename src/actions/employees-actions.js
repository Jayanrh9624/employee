import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_ERROR,
  BEGIN_EMPLOYEES_DOWNLOAD,
  EMPLOYEES_DOWNLOAD_OK,
  EMPLOYEES_DOWNLOAD_ERROR,
  RETRIEVE_EMPLOYEE_DELETE,
  EMPLOYEE_DELETED_OK,
  EMPLOYEE_DELETED_ERROR,
  RETRIEVE_EMPLOYEE_EDIT,
  BEGIN_EDIT_EMPLOYEE,
  EMPLOYEE_EDITED_OK,
  EMPLOYEE_EDITED_ERROR
} from '../types'
import store from '../store'



const downloadEmployees = () => ({
  type: BEGIN_EMPLOYEES_DOWNLOAD,
  payload: true
})

const downloadEmployeesOk = employees => ({
  type: EMPLOYEES_DOWNLOAD_OK,
  payload: employees
})

const downloadEmployeesError = () => ({
  type: EMPLOYEES_DOWNLOAD_ERROR,
  payload: true
})

export const downloadEmployeesAction = () => store.dispatch(downloadEmployees())

export const downloadEmployeesOkAction = employees => store.dispatch(downloadEmployeesOk(employees))

export const downloadEmployeesErrorAction = () => store.dispatch(downloadEmployeesError())



const addEmployee = employee => ({
  type: ADD_EMPLOYEE,
  payload: true,
  employee: employee
})

const addEmployeeOk = () => ({
  type: BEGIN_EMPLOYEES_DOWNLOAD,
  payload: true
})

const addEmployeeError = state => ({
  type: ADD_EMPLOYEE_ERROR,
  payload: state
})

export const addEmployeeAction = employee => store.dispatch(addEmployee(employee))

export const addEmployeeOkAction = () => store.dispatch(addEmployeeOk())

export const addEmployeeErrorAction = state => store.dispatch(addEmployeeError(state))



const retrieveEmployeeDelete = id => ({
  type: RETRIEVE_EMPLOYEE_DELETE,
  payload: id
})

const deleteEmployeeOk = () => ({
  type: EMPLOYEE_DELETED_OK
})

const deleteEmployeeError = () => ({
  type: EMPLOYEE_DELETED_ERROR,
  payload: true
})

export const deleteEmployeeAction = id => store.dispatch(retrieveEmployeeDelete(id))

export const deleteEmployeeOkAction = () => store.dispatch(deleteEmployeeOk())

export const deleteEmployeeErrorAction = () => store.dispatch(deleteEmployeeError())



const retrieveEmployeeAction = employee => ({
  type: RETRIEVE_EMPLOYEE_EDIT,
  payload: employee
})

const editEmployee = employee => ({
  type: BEGIN_EDIT_EMPLOYEE,
  employee: employee
})

const editEmployeeOk = employee => ({
  type: EMPLOYEE_EDITED_OK,
  payload: employee
})

const editEmployeeError = () => ({
  type: EMPLOYEE_EDITED_ERROR,
  payload: true
})

export const retrieveEmployeeEditAction = employee => store.dispatch(retrieveEmployeeAction(employee))

export const editEmployeeAction = employee => store.dispatch(editEmployee(employee))

export const editEmployeeOkAction = employee => store.dispatch(editEmployeeOk(employee))

export const editEmployeeErrorAction = () => store.dispatch(editEmployeeError())
