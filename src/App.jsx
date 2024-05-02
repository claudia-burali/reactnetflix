
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNav from "./components/NetflixNav";
import NetflixFot from './components/NetflixFot';
import NetflixMain from './components/NetflixMain';
/*import ProfilePage from './components/ProfilePage';
import AccountPage from './components/AccountPage';*/

function App() {
  return (
    <div className="App bg-black">
      <NetflixNav />
      <NetflixMain />
      <NetflixFot />
    </div>
  );
}

export default App;

/*<ProfilePage />
<AccountPage />*/
