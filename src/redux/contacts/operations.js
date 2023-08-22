import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'redux/auth/operations'

export const fetchContacts = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
	try {
		const res = await API.get('contacts')
		return res.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const addContactsThunk = createAsyncThunk('addContacts', async (body, thunkAPI) => {
	try {
		const res = await API.post('contacts', body)
		return res.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteContactsThunk = createAsyncThunk('deleteContacts', async (contactId, thunkAPI) => {
	try {
		await API.delete(`contacts/${contactId}`)
		return contactId
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
