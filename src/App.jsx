import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from "./components/Board/Board"

function App() {

    return (
      <>
      <div className='board-row'>
    <Board value="1"/>
    <Board value="2"/>
    <Board value="3"/>
</div>
<div className='board-row'>
    <Board value="4"/>
    <Board value="5"/>
    <Board value="6"/>
</div>
<div className='board-row'>
    <Board value="7"/>
    <Board value="8"/>
    <Board value="9"/>
</div>
      </>
    );
  }


export default App
