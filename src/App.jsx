// import { useState } from 'react'
import React from 'react'
import AppleCounter from './components/AppleCounter';
import Counter from './components/counter';

const App = () => {
  // const [count, setCount] = useState(0); // Moved inside App component

  return (
    <div>
      <Counter/>
      <AppleCounter/>
    </div>
  )
}

export default App