import React, { useState } from 'react';
import Header from './components/Header';
import './style/App.scss';

const App : React.FC = () =>{

  const [resultSearch, setResultSearch] = useState<string>('');

  return (
    <div className="header">
      <Header setResultSearch={setResultSearch}/>
    </div>
  )
}

export default App;