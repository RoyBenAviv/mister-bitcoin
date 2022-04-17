import { Component } from 'react'
import contactService from '../services/contactService'

export class ContactDetails extends Component {

state = {
    contact: null
}

async componentDidMount() { 
    const contact = await contactService.getContactById(this.props.contactId)
    this.setState({ contact })
 }

  render() {
    const { contact } = this.state
    if(!contact) return <div>Loading...</div>

    return (
      <section className="contact-details">
        <img src={`https://robohash.org/set_set5/${contact.name.split(" ")[0]}.png`} alt="img" />
        <h1>{contact.name}</h1>
        <h2><span>Email:</span> {contact.email}</h2>
        <h2><span>Phone:</span> {contact.phone}</h2>
        <span onClick={this.props.onBack} className="exit"><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
      </section>
    )
  }
}
