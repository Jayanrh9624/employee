import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteEmployeeAction, retrieveEmployeeEditAction } from '../../actions/employees-actions'
import './index.css'

const Employee = (employee) => {
  const history = useHistory()
  const { name, email,address, id } = employee

  const confirmDeleteEmployee = id => {
  
    Swal.fire({
      title: 'Are you sure you want to delete the employee?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      result.value && deleteEmployeeAction(id)
    })
  }

  const redirectionEdition = employee => {
    retrieveEmployeeEditAction(employee)
    history.push(`employees/edit/${id}`)
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email} </td>
      <td>{address} </td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(employee)}
        >Edit</button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteEmployee(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Employee