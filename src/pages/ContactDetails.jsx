import { Component } from 'react'
import { Link } from 'react-router-dom'
import contactService from '../services/contactService'

export class ContactDetails extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    this.loadContact()
  }
  async loadContact() {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  onBack = () => {
    this.props.history.push('/contact')
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
      </section>
    )
  }
}
