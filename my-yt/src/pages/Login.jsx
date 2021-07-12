import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendLoginInformation } from '../actions';

class Login extends Component {
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
    });
  }
  
  render() {
    const { name, password } = this.state;
    const { sendLoginInformation } = this.props;
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
        <Link to="/home" >
          <button
            type="button"
            onClick={ () => sendLoginInformation(name, password) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLoginInformation: (name, password) => dispatch(sendLoginInformation(name, password)),
})

export default connect(null, mapDispatchToProps)(Login);
