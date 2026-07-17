import { useState } from 'react'
import { Envelope } from './components/Envelope'
import { Invitation } from './components/Invitation'
import './styles/global.css'

type View = 'envelope' | 'invitation'

export default function App() {
  const [view, setView] = useState<View>('envelope')

  if (view === 'envelope') {
    return <Envelope onOpened={() => setView('invitation')} />
  }

  return <Invitation />
}
