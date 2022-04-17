import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
  return (
    <section className="contact-preview">
      <Link className="preview-container" to={`/contact/${contact._id}`}>
        <img src={`https://robohash.org/set_set5/${contact._id}.png`} alt="img" />
        <h2>{contact.name}</h2>
      </Link>
        <div className="actions">
          <span onClick={() => onRemoveContact(contact._id)}><i className="fa-solid fa-trash-can"></i></span>
          <Link to={`/contact/edit/${contact._id}`}><i className="fa-solid fa-user-pen"></i></Link>
        </div>
    </section>
      
  )
}
