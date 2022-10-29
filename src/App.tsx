import { useState } from 'react'
import reactLogo from './assets/icons/react.svg'
import CreatorButton from './components/creatorButton'
import RightColumn from './components/rightColumn'

function App() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  const toggleDrawer = (open: boolean) =>
          (event: KeyboardEvent | MouseEvent) => {
              if (
                  event.type === 'keydown' &&
                  ((event as KeyboardEvent).key === 'Tab' ||
                      (event as KeyboardEvent).key === 'Shift')
              ) {
                  return
              }
              setIsDrawerOpened(open)
          }

  return (
    <div className="App">
      <CreatorButton/>
      <RightColumn isOpen={isDrawerOpened} toggleDrawer={toggleDrawer}/>
    </div>
  )
}

export default App
