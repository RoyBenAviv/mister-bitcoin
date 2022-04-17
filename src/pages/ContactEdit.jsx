import { Component } from 'react'
import contactService from '../services/contactService'

export class ContactEdit extends Component {

  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  async loadContact() {
    const id = this.props.match.params.id
    const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
    this.setState({ contact })
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({...this.state.contact})
    this.props.history.push('/contact')
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <section className="contact-edit">
        <h2>{contact._id ? 'Edit' : 'Add new'} contact</h2>
          {contact._id ?
          <img src={`https://robohash.org/set_set5/${contact._id}.png`} alt="img" />
          : <i className="fa-solid fa-person-circle-plus"></i>
          }
        <form onSubmit={this.onSaveContact}>
          <label>
            Name:
            <input onChange={this.handleChange} value={contact.name} type="text" name="name" />
          </label>
          <label>
            Email:
            <input onChange={this.handleChange} value={contact.email} type="email" name="email" />
          </label>
          <label>
            Phone: 
            <input onChange={this.handleChange} value={contact.phone} type="phone" name="phone" />
          </label>
        <button>Save</button>
        </form>
      </section>
    )
  }
}
