import axios from 'axios'

const UserAPI = {

  getUsers: () => axios.get('/users'),
  getUser: (id) => axios.get(`/users/${id}`),
  createUser: (user) => axios.post('/users', user),
  updateUser: (id, values) => axios.put(`/users/${id}`, values),
  deleteUser: (id) => axios.delete(`/users/${id}`)

}

export default UserAPI