import React from 'react'
import logo from './logo.svg'
import './App.css'
import Wrapper from './components/Wrapper'
import WrapperProvider from './components/WrapperProvider'
import { DisplayProvider } from './contexts'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Uncoupled Context</h1>
        <WrapperProvider name={'1'}></WrapperProvider>
        <WrapperProvider name={'2'}></WrapperProvider>
        <h1>Coupled Context</h1>
        <DisplayProvider>
          <Wrapper name={'1'}></Wrapper>
          <Wrapper name={'2'}></Wrapper>
        </DisplayProvider>
      </header>
    </div>
  )
}

export default App
