import axios from 'axios'

const EventAPI = {

  getUserEvents: () => axios({
    method: 'GET',
    url: '/events',
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('werkToken')}`
    }
  }),
  getOneEvent: (id) => axios.get(`/events/${id}`),
  createEvent: (event) => axios.post('/events', event),
  updateEvent: (id, values) => axios.put(`/events/${id}`, values),
  deleteEvent: (id) => axios.delete(`/events/${id}`)

}

export default EventAPI