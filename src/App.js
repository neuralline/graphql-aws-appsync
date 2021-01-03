import { useEffect, useState } from 'react'
import { onCreateByRoomId } from './graphql/subscriptions'

import './App.css'
import { API } from 'aws-amplify'

function App() {
  const [message, updateMessage] = useState({
    id: '000',
    message: 'No message yet',
    roomId: '0001',
    createdAt: '2021-01-03T19:20:21.121Z',
    updatedAt: '2021-01-03T19:20:21.121Z'
  })

  useEffect(() => {
    subscribe()
  })

  const subscribe = () => {
    API.graphql({
      query: onCreateByRoomId,
      variables: { roomId: '001' }
    }).subscribe({
      next: messageData => {
        console.log('messageData from subscription : ', messageData)
        return updateMessage(messageData.value.data.onCreateByRoomId)
      }
    })
  }

  return (
    <div className="App">
      <h1>App Sync subs</h1>
      {message && <h1>{message.message}</h1>}
    </div>
  )
}

export default App
