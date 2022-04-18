import React, { Component } from 'react'
import { userService } from '../services/userService'

export class TransferFund extends Component {
  state = {
    amount: '',
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = +target.value
    this.setState((prevState) => ({ ...prevState, [field]: value }))
  }

  onTransferCoins = () => {
    this.props.onTransferCoins(this.state.amount)
  }

  render() {
    const { amount } = this.state
    return (
      <section className="transfer-fund">
        <p>Transfer coins to {this.props.contact.name}</p>
        <label>
          Amount:
          <input type="number" onChange={this.handleChange} name="amount" value={amount} />
        </label>
        {/* <button onClick={() => this.onTransferCoins()}>Transfer</button> */}
        <button onClick={this.onTransferCoins}>Transfer</button>
      </section>
    )
  }
}
