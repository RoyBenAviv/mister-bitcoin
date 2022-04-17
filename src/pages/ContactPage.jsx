import { Component } from 'react'
import contactService from '../services/contactService'
import { ContactList } from '../components/ContactList'
import ContactFilter from '../components/ContactFilter'
import { Link } from 'react-router-dom'

export class ContactPage extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onRemoveContact = async (contactId) => {
    await contactService.deleteContact(contactId)
    this.loadContacts()
  }

  render() {
    const { contacts } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="contact-page">
        <div className="page-actions">
        <ContactFilter  onChangeFilter={this.onChangeFilter} />
        <Link to="/contact/edit">Add Contact</Link>
        </div>
        <ContactList onRemoveContact={this.onRemoveContact}  contacts={contacts} />
                
        </section>
    )
  }
}

export default ContactPage
