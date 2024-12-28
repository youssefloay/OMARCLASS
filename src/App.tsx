import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import VideoDetails from './pages/VideoDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Player from './pages/Player';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import AdminDashboard from './pages/admin/Dashboard';
import AdminVideos from './pages/admin/Videos';
import AdminUsers from './pages/admin/Users';
import AdminReports from './pages/admin/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="video/:id" element={<VideoDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="cart" element={<Cart />} />
          
          {/* Admin routes */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/videos" element={<AdminVideos />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="admin/reports" element={<AdminReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;