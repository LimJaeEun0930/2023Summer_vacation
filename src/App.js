import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import MainPage from './main';
import LogInPage from './login';
import RegisterPage from './register';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/'  element={<MainPage />} />
    <Route path='/login' element={<LogInPage />} />
    <Route path='/register' element={<RegisterPage />} />
   </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;