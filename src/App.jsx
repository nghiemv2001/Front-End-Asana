import './App.css'
import MyTaskPage from './pages/myTaskPage/MyTask'
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DrawerProvider } from './context/useContext';
import { InboxPage } from './pages/inboxPage/InBoxPage';

function App() {

  return (
    <>
    <DrawerProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>    
        <Route path='/task' element={<MyTaskPage/>}/>
        <Route path='/inbox' element={<InboxPage/>}/>
        <Route path='*' element={<h1>No Page !</h1>}/>
      </Routes>
    </BrowserRouter>
    </DrawerProvider>

    </>
  )
}

export default App
