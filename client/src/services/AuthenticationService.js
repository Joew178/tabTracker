import Api from '@/services/Api'
// going to export an object with a register method to it
export default {
  register (credentials) { // call a register method on Api (axios object)
    return Api().post('register', credentials) // post request to the register enddpoint, sending in some credentials
  }
}

// how the above method would be called from another file
// AuthenticationService.register({
//   email: 'testing123',
//   password: "123456"
// })
