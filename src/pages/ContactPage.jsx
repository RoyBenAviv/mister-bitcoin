import { Component } from 'react'
import contactService from '../services/contactService'
import { ContactList } from '../components/ContactList'
import ContactFilter from '../components/ContactFilter'
import { ContactDetails } from './ContactDetails.jsx'

export class ContactPage extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  onSelectContact = (ContactId) => {
    this.setState({ selectedContactId: ContactId })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  render() {
    const { contacts, selectedContactId } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="contact-page">{
        selectedContactId ? 
        <ContactDetails contactId={selectedContactId} onBack={() => this.onSelectContact(null)} /> : 
        <>
        <ContactFilter  onChangeFilter={this.onChangeFilter} />
        <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />
        
        </>
          }
          
        </section>
    )
  }
}

export default ContactPage
