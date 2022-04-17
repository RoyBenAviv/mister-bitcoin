import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({contacts, onSelectContact}) {
  return (
    <section className="contact-list">
        {contacts.map(contact =>
            <ContactPreview key={contact._id} onSelectContact={onSelectContact} contact={contact}/>
          )}

    </section>

    )
}
