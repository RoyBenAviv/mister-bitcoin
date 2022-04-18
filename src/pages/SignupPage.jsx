import React, { Component } from 'react'
import { userService } from '../services/userService'
import Lottie from 'react-lottie'
import animationData from '../assets/animations/signup-bitcoin.json'

export class SignupPage extends Component {
  get defaultOptions() {
    return {
      loop: true,
      autoplay: true,
      animationData,
    }
  }

  state = {
    userName: '',
  }

  signup() {
    userService.signup(this.state.userName)
    this.props.history.push('/')
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({ ...prevState, [field]: value }))
  }

  render() {
    const { userName } = this.state
    return (
      <section className="signup-page">
        <div className="btc-animation">
          <Lottie options={this.defaultOptions} height={550} width={550} />
        </div>
        <h1>Mister Bitcoin</h1>
        <h2>Crypto application services.</h2>
        <label>
          <span>Start with writing your name <i className="fa-solid fa-arrow-right"></i></span>
          <input onChange={this.handleChange} type="text" name="userName" value={userName} />
        <span className="go" onClick={() => this.signup()}><i className="fa-brands fa-golang"></i></span>
        </label>
        {/* <button onClick={() => this.signup()}>Start!</button> */}
      </section>
    )
  }
}