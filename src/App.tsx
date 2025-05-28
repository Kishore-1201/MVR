import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { BanquetHalls } from './pages/BanquetHalls';
import { RoomDetails } from './pages/RoomDetails';
import { BanquetDetails } from './pages/BanquetDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="banquet-halls" element={<BanquetHalls />} />
          <Route path="banquet-halls/:id" element={<BanquetDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
