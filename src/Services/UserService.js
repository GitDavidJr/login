import axios from 'axios';

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + '/api'
    })
  }

  async login (dados) {
    //const {data} = await this.axios.post('/login', dados)

    const data = {
      user: {
        nome: "João",
        email: "joao1234@gmail.com"
      },
      token: "123456789"
    }

    if (data) {
      localStorage.setItem("nome", data.user.nome)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token)

      return true
    }

    return
  }

  async cadastrar (dados) {
    return this.axios.post('/user', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token") != undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
  }
}