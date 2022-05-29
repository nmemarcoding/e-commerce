import Login from './components/login/Login';
import Navbars from './components/navbar/Navbar'
import './App.css'
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <div className="container">

      <div className="Logind">
      <SignUp/>
      </div>
      </div>
    </div>
  );
}

export default App;
