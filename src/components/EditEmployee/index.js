import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { editEmployeeAction } from '../../actions/employees-actions'
import { useHistory } from 'react-router-dom'
import './index.css'

const EditEmployee = () => {
  const history = useHistory()
  const employeeEdit = useSelector(state => state.employees.editEmployee)
  const [employee, setEmployee] = useState({
    name: '',
    email:'',
    address:''
  })

  
  useEffect(() => {
    setEmployee(employeeEdit)
  }, [employeeEdit])


  const submitEditEmployee = event => {
    event.preventDefault()
    editEmployeeAction(employee)
    history.push('/')
  }


  const onChangeForm = event => {
    setEmployee({
      ...employee,
      [event.target.name] : event.target.value
    })
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
       <h2 className='table__title'>Edit employee</h2>
      <form
        className='form'
        onSubmit={submitEditEmployee}
      >
        <section className='form__section'>
          <label>Employee name</label>
          <input
            type='text'
            name='name'
            value={employee.name}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Employee Email</label>
          <input
            type='email'
            name='email'
            value={employee.email}
            onChange={onChangeForm}
          />
          
        </section>
        <section className='form__section'>
          <label>Employee address</label>
          <input
            type='text'
            name='address'
            value={employee.address}
            onChange={onChangeForm}
          />
          </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
           >Cancel</button>
          <button className='button button--confirm'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee