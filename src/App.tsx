import React from 'react';
import Login from './pages/Login';
import Sidebar from './features/Sidebar/Sidebar';
import Heading from './features/Heading/Heading';
import { useTextChangeOnClick } from './hooks/handleClick';


function App() {
  const { textValue, updateTextOnClick } = useTextChangeOnClick("Dashboard")

  return (
    <div className="container">
      <Login />

        {/* <Sidebar 
          onCheckedText={ updateTextOnClick }
          
        />
          
        <Heading 
          text={textValue}
        />  */}
    </div>
  );
}

export default App;
