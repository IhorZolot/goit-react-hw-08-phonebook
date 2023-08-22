import { addContactsThunk, deleteContactsThunk, fetchContacts } from './operations'

const { createSlice } = require('@reduxjs/toolkit')

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: [],
		filter: '',
	},
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, (state, { payload }) => {
				state.contacts = payload
			})
			.addCase(addContactsThunk.fulfilled, (state, { payload }) => {
				state.contacts.push(payload)
			})
			.addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
				state.contacts = state.contacts.filter(contact => contact.id !== payload)
			})
	},
})

export const contactsReducer = contactsSlice.reducer
export const { setFilter } = contactsSlice.actions
