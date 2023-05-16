 
 
 
import './App.css';
// import { Link} from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Link to={'/home'}> home</Link>
        <Link to={'/login'}>go to login</Link>
        <Link to={'/Register'}>go to Register </Link> */}
        <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element = { <Home/>}/>
          <Route path='/about' element = { <About/>}/>
          <Route path='/login' element = { <Login/>}/>
          <Route path='/register' element = { < Register/>}/>

         
        </Routes>


        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
