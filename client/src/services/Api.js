import axios from 'axios' // used to set up a connector used to hit up the backend

export default () => {
  return axios.create({ // file gives back a connector, create an axios object that points to the backend URL
    baseURL: `http://localhost:8081/`
  })
}
