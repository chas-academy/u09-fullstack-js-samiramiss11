import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HistoryLiterary from './pages/HistoryLiterary';
import Books from './pages/Books';
import Authors from './pages/Authors';
import News from './pages/News';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider } from './context/AuthContext';
import AuthorCard from './components/AuthorCard';


const App = () => {
  return (
    <AuthProvider> 
      <Router>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/history-literary" element={<HistoryLiterary />} />
    <Route path="/books" element={<Books />} />
    <Route path="/authors" element={<Authors />} />
    <Route path="/news" element={<News />} />
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/search-results" element={<SearchResults />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/authors" element={<Authors />} />
    <Route path="/author/:name" element={<AuthorCard />} />
</Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;