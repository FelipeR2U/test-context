import React from 'react'
import logo from './logo.svg'
import './App.css'
import Wrapper from './components/Wrapper'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Wrapper name={'1'}></Wrapper>
        <Wrapper name={'2'}></Wrapper>
      </header>
    </div>
  )
}

export default App
