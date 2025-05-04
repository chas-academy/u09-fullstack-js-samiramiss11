import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import History from './pages/History';
import Books from './pages/Books';
import ErrorPage from './pages/ErrorPage';
import QuizAndQuote from './pages/QuizAndQuote';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard  from './pages/UserDashboard';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import TopicCard from './components/TopicCard';
import BookCard from './components/BookCard';
import CoreConcepts from './pages/CoreConcepts';
import Therapies from './pages/Therapies';
import Theories from './pages/Theories';
import Methods from './pages/Methods';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsService from './pages/TermsService';
import SiteMap from './pages/SiteMap';
import ManageUsers from './pages/ManageUsers';
import ManageContent from './pages/ManageContent';
import Quiz from './pages/Quiz';



const App = () => {
  return (
    <AuthProvider> 
      <Router>
      <ScrollToTop><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<History />} />
    <Route path="/books" element={<Books />} />
    <Route path="/book/:id" element={<BookCard />} />
    <Route path="/news" element={<QuizAndQuote />}/>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/search-results" element={<SearchResults />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/topic/:name" element={<TopicCard />} />
    <Route path="/core-concepts" element={<CoreConcepts />} />
    <Route path="/quiz/:quizId" element={<ProtectedRoute element={<Quiz />} />} />
    <Route path="/therapies" element={<Therapies />} />
    <Route path="/theories" element={<Theories />} />
    <Route path="/methods" element={<Methods />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-service" element={<TermsService />} />
    <Route path="/SiteMap" element={<SiteMap/>} />
    
     {/* Protected Routes */}
     <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard/>} />} />
     <Route path="/admin-dashboard" element={<ProtectedRoute element={<AdminDashboard/>} />} />
     <Route path="/user-dashboard" element={<ProtectedRoute element={<UserDashboard/>} />} />
  <Route path="/manage-users" element={<ProtectedRoute element={<ManageUsers />} />} />
  <Route path="/manage-content" element={<ProtectedRoute element={<ManageContent />} />} />

</Routes>
<ScrollToTopButton />
</ScrollToTop>
 </Router>
    </AuthProvider>
  );
};

export default App;