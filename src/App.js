/* eslint-disable import/no-named-as-default */
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './components/routes/PrivateRoutes';
import MultiForm from './components/MultiForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/multiform" element={<MultiForm />} />
      </Routes>
    </>
  );
}

export default App;
