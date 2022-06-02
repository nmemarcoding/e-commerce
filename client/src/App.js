import Navbars from './components/navbar/Navbar'
import './App.css'
import SignUp from './components/signUp/SignUp';
import LoginPage from './pages/loginPage/LoginPage.js';
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import SignUpPage from './pages/signUpPage/SignUpPage';
import Axios from './hook/axios'
import ItemCard from './components/itemCard/ItemCard';

function App() {
  try{
    Axios.get('/item').then((res)=>{
      console.log(res.data)
    })
    
  }catch(err){
    console.log(err)
  }
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<><SignUpPage/></>}/>
          <Route path="/login" element={<><LoginPage/></>}/>
          <Route path="*" element={<><Navbars/><ItemCard/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
