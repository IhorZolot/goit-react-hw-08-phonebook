import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'redux/contacts/contactsSlice'
import { addContactsThunk, deleteContactsThunk, fetchContacts } from 'redux/contacts/operations'
import { ContainerStyled } from './contactBook.styled'
import { ContactForm } from 'components/contactForm/ContactForm'
import { ContactFilter } from 'components/contactFilter/ContactFilter'
import { ContactList } from 'components/contactList/ContactList'

export const ContactBook = () => {
	const contacts = useSelector(state => state.contacts.contacts)
	const filter = useSelector(state => state.contacts.filter)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const handleChangeSearchValue = event => {
		const { value } = event.target
		dispatch(setFilter(value))
		// setFilter(value);
	}

	const getFilteredData = () => {
		return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
	}

	const checkDuplicateContact = name => {
		return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
	}

	const handleSubmit = newContact => {
		dispatch(addContactsThunk(newContact))

		// setContacts(prevContacts => [...prevContacts, newContact]);
	}

	const handleDeleteContact = id => {
		dispatch(deleteContactsThunk(id))
		// setContacts(prevContacts =>
		//   prevContacts.filter(contact => contact.id !== id)
		// );
	}
	const filteredContacts = getFilteredData()

	return (
		<ContainerStyled>
			<h1>Phonebook</h1>
			<ContactForm checkDuplicateContact={checkDuplicateContact} onSubmit={handleSubmit} />
			<h2>Contacts</h2>
			<ContactFilter filter={filter} onChange={handleChangeSearchValue} />
			<ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
		</ContainerStyled>
	)
}
