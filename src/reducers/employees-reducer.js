import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_OK,
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

const initialState = {
  employees: [],
  error: false,
  loading: false,
  deleteEmployee: null
}

export default function(state = initialState, action) {
  switch(action.type) {

    case BEGIN_EMPLOYEES_DOWNLOAD:
    case ADD_EMPLOYEE:
    case BEGIN_EDIT_EMPLOYEE:
      return {
        ...state,
        loading: action.payload,
        employee: action.employee
      }

    case ADD_EMPLOYEE_OK:
      return {
        ...state,
        loading: false
      }

    case ADD_EMPLOYEE_ERROR:
    case EMPLOYEES_DOWNLOAD_ERROR:
    case EMPLOYEE_DELETED_ERROR:
    case EMPLOYEE_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case EMPLOYEES_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: null,
        employees: action.payload
      }

    case RETRIEVE_EMPLOYEE_DELETE:
      return {
        ...state,
        deleteEmployee: action.payload
      }

    case EMPLOYEE_DELETED_OK:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== state.deleteEmployee),
        deleteEmployee: null
      }

    case RETRIEVE_EMPLOYEE_EDIT:
      return {
        ...state,
        editEmployee: action.payload
      }

    case EMPLOYEE_EDITED_OK:
      return {
        ...state,
        editEmployee: null,
        employees: state.employees.map(employee =>
          employee.id === action.payload.id ? employee = action.payload : employee
        )
      }

    default:
      return state
  }
}