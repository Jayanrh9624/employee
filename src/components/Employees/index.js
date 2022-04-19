import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { downloadEmployeesAction } from '../../actions/employees-actions'
import Employee from '../Employee'
import './index.css'

const Employees = () => {
  useEffect(() => {
    (async () => await downloadEmployeesAction())()
  }, [])

  let employees = useSelector(state => state.employees.employees)
  const error = useSelector(state => state.employees.error)
  const loading = useSelector(state => state.employees.loading)

  return (
    <div>
      <h2 className='table__title'>Employees</h2>
      { error ? <p>An error ocurred</p> : null }
      { loading ? <p>Loading...</p> : null }
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { employees.length === 0 ? 'No employees yet.' : (
            employees.map(employee =>
              <Employee
                key={employee.id}
                name={employee.name}
                email={employee.email}
                address={employee.address}
                id={employee.id}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
