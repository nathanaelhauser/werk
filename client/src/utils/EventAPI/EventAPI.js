import axios from 'axios'

const EventAPI = {

  getEvents: () => axios.get('/events'),
  getEventsForUser: (id) => axios.get(`/events/${id}`),
  createEvent: (event) => axios.post('/events', event),
  updateEvent: (id, values) => axios.put(`/events/${id}`, values),
  deleteEvent: (id) => axios.delete(`/events/${id}`)

}

export default EventAPI