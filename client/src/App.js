import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Toast
import { Toaster } from 'react-hot-toast'
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path='/' element={<ProtcetedRoutes><Home /></ProtcetedRoutes>} />
        <Route path='/login' element={<PublicdRoutes><Login /></PublicdRoutes>} />
        <Route path='/register' element={<PublicdRoutes><Register /></PublicdRoutes>} />
        <Route path='/verifymail/:token' element={<PublicdRoutes><VerifyEmail /> </PublicdRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export function ProtcetedRoutes({ children }) {
  const user = localStorage.getItem('user');
  if (user && user !== '') {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

export function PublicdRoutes({ children }) {
  const user = localStorage.getItem('user');
  if (user && user !== '') {
    return <Navigate to='/' />
  } else {
    return children
  }
}

export default App;
