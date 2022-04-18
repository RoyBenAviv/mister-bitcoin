import { Component } from 'react'
import contactService from '../services/contactService'
import { TransferFund } from '../components/TransferFund'
import { MoveList } from '../components/MoveList'
import { userService } from '../services/userService'
export class ContactDetails extends Component {
  state = {
    contact: null,
    user: null,
  }

  async componentDidMount() {
    this.loadContact()
    this.loadUser()
  }
  async loadContact() {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  onBack = () => {
    this.props.history.push('/contact')
  }

  loadUser() {
    const user = userService.getUser()
    this.setState({ user })
  }

  get contactMoves() {
    const contactMoves = this.state.user.moves.filter((move) => move.toId === this.state.contact._id)
    return contactMoves
  }

  onTransferCoins = (amount) => {
    userService.addMove(this.state.contact, amount)
    this.loadUser()
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>

    return (
      <section className="contact-details">
        <img src={`https://robohash.org/set_set5/${contact._id}.png`} alt="img" />
        <h1>{contact.name}</h1>
        <h2>
          <span>Email:</span> {contact.email}
        </h2>
        <h2>
          <span>Phone:</span> {contact.phone}
        </h2>
        <span onClick={this.onBack} className="exit">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </span>
        <TransferFund contact={contact} onTransferCoins={this.onTransferCoins} />
        <MoveList title="Your moves:" moves={this.contactMoves}/>
      </section>
    )
  }
}
