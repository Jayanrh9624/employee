import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addEmployeeAction } from '../../actions/employees-actions'
import { showAlert, hideAlertAction } from '../../actions/alert-actions'
import './index.css'

const Newemployee = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  
  const loading = useSelector(state => state.employees.loading) 
  const error = useSelector(state => state.employees.error)
  const alert = useSelector(state => state.alert.alert)

  const submitNewEmployee = async event => {
    event.preventDefault()
  
    if(name.trim() =='' || email.trim() == '' || address.trim() == '') {
      const alert = {
        msg: 'All fields are required.'
      }
      showAlert(alert)
      return
    }
    
    hideAlertAction()
    
    await addEmployeeAction({ name,email,address})
    
    history.push('/')
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h2 className='table__title'>New employee</h2>
      <form
        className='form'
        onSubmit={submitNewEmployee} >
        <section className='form__section'>
          <label>Employee name</label>
          <input
            type='text'
            placeholder='Employee name'
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Employee email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Employee Adress</label>
          <input
            type='text'
            name='address'
            value={address}
            onChange={event => setAddress(event.target.value)}
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
        { alert ? <p className='alert-message'>{alert.msg}</p> : null }
      </form>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Ups! An error ocurred.</p> : null }
    </div>
  )
}

export default Newemployee