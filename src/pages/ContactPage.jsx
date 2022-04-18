import { Component } from 'react'
import { connect } from 'react-redux'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
import { Link } from 'react-router-dom'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {

  async componentDidMount() {
    this.props.loadContacts()
    
  }

  onChangeFilter = async (filterBy) => {
    await this.props.setFilterBy(filterBy)
    console.log('filterBy',filterBy);
    this.props.loadContacts()
  }

  onRemoveContact = async (contactId) => {
    this.props.removeContact(contactId)
  }

  render() {
    const { contacts } = this.props
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

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
