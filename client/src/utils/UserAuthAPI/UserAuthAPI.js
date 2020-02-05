import axios from 'axios'

const UserAuthAPI = {

  registerUser: user => axios.post('/userAuth', user),
  loginUser: user => axios.post('/login', user),
  authorizeUser: () => axios.get('/authorize', {
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('werkToken')}`
    }
  })

}

export default UserAuthAPI