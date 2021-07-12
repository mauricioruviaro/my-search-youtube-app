import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super()
    
    this.state = {
      name: '',
      password: '',
    }
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { name, password } = this.state;
    return (
      <div>
        <input
          onChange={ this.handleChange }
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={ name }
          />
        <input
          onChange={ this.handleChange }
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={ password }
          />
        <Link to="/home">
          <button type="button">Entrar</button>
        </Link>
      </div>
    );
  }
}
