import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNav from "./components/NetflixNav";
import NetflixFot from './components/NetflixFot';
import NetflixMain from './components/NetflixMain';
import ProfilePage from './components/ProfilePage';
import AccountPage from './components/AccountPage';

function App() {
  return (
      <div className="App bg-black">
        <BrowserRouter>
          <NetflixNav />
          <Routes>
            <Route path="/" element={<NetflixMain />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
          <NetflixFot />
        </BrowserRouter>
      </div>
  );
}

export default App;

