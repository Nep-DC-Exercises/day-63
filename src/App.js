import React from 'react';
import Heading from './components/Heading'

function App() {
  const style = {
    fontSize: '64px',

  }
  return (
    <div className="App">
      <Heading style={style} text={"This is my App.js"} />
    </div>
  );
}

export default App;
