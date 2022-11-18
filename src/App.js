import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TitleBar from './components/TitleBar/TitleBar';
import ReferEarnPage from './pages/ReferEarnPage/ReferEarnPage';
import FriendsReferredPage from './pages/FriendsReferredPage/FriendsReferredPage';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TitleBar />
      <Routes>
        <Route path="/" exact element={<ReferEarnPage />} />
        <Route path="/enrolled" element={<FriendsReferredPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
