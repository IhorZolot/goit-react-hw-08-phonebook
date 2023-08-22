import React from 'react'
import ReactDOM from 'react-dom/client'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter basename='goit-react-hw-08-phonebook'>
			<Provider store={store}>
				<App />
				<ToastContainer autoClose={1500} hideProgressBar transition={Slide} />
			</Provider>
		</BrowserRouter>
	</>
)
