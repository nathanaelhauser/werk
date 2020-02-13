import React from 'react'
import axios from 'axios'

const FriendAPI = {

  getFriends: () => axios({
    method: 'GET',
    url: '/friends',
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('werkToken')}`
    }
  }),
  addFriend: friend => axios({
    method: 'PUT',
    url: '/friends',
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('werkToken')}`
    },
    data: { friend }
  }),
  deleteFriend: friend => axios({
    method: 'DELETE',
    url: '/friends',
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('werkToken')}`
    },
    data: { friend }
  })

}

export default FriendAPI