import { useState } from 'react'
import reactLogo from '@/assets/icons/react.svg'
import CreatorButton from './components/creatorButton'
import RightColumn from './components/rightColumn'

function App() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpened(open);
    };

  return (
    <div className="App">
      <CreatorButton/>
      <RightColumn isOpen={isDrawerOpened} toggleDrawer={toggleDrawer}/>
    </div>
  )
}

export default App
