import axiosClient from '../config/axios'

export async function retrieveEmployeesDB() {
  return await axiosClient.get('/employees')
}

export async function addEmployeeDB(employee) {
  return await axiosClient.post('/employees', employee)
}

export async function deleteEmployeeDB(id) {
  return await axiosClient.delete(`/employees/${id}`)
}

export async function editEmployeeDB(employee) {
  return await axiosClient.put(`/employees/${employee.id}`, employee)
}
