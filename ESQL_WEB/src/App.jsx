import './App.css'

// axios 추가
import axios from 'axios';
import IndexMenu from './component/IndexMenu';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexMenu/>}/>
      </Routes>
    </>
  )
}

export default App
