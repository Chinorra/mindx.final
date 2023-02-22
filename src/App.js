import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ActivePage from './pages/ActivePage';
import {Routes, Route} from 'react-router-dom';
import CompletedPage from './pages/CompletedPage';
import ContextProvider from './components/ContextProvider';

function App() {
  return (
    <>
    <div className='app'>
      <Header />
      <Navbar />
        <ContextProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/active' element={<ActivePage/>}/>
        <Route path='/completed' element={<CompletedPage/>}/>
      </Routes>
        </ContextProvider>
    </div>
    </>
  );
}

export default App;
