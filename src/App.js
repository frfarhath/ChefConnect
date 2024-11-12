import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/UserDashboard/Navbar';
import Home from '../src/pages/Home';
import UserDashboard from './pages/UserDashboard/Pages/UserDashboard';
import MyProfile from './pages/UserDashboard/Pages/MyProfile';
import AddRecipe from './pages/UserDashboard/Pages/AddRecipe';
import SavedRecipes from './pages/UserDashboard/Pages/SavedRecipies';
import Settings from './pages/UserDashboard/Pages/Settings';
import RecipiePage from './pages/UserDashboard/Pages/RecipePage';
import LoginPage from './pages/UserDashboard/Pages/LoginPage';
import SignupPage from './pages/UserDashboard/Pages/SignupPage';
import UserProfile from './pages/UserDashboard/Pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/savedrecipies" element={<SavedRecipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/viewrecipie" element={<RecipiePage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
