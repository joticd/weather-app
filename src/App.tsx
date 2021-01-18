import React from 'react';
import Header from './components/Header';
import './style/App.scss';

const App : React.FC = () =>{
  return (
    <div className="header">
      <Header />
    </div>
  )
}

export default App;