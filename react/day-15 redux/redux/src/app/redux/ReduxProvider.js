"use client"
import { Provider } from 'react-redux'
import { wsStore } from './store'

export default function ReduxProvider({children}) {
  return (
    <Provider store={wsStore} >
        {children}
    </Provider>
  )
}
