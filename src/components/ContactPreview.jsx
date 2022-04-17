
export function ContactPreview({contact, onSelectContact}) {
  return (
        <section onClick={() => onSelectContact(contact._id)} className="contact-preview">
            <img src={`https://robohash.org/set_set5/${contact.name.split(" ")[0]}.png`} alt="img" />
            <h2>{contact.name}</h2>
        </section>
    )
}

