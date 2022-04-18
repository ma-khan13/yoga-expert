import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Shared/Header/Header'
import About from './componets/Home/About/About';
import Blog from './componets/Home/Blog/Blog';
import Home from './componets/Home/Home/Home';
import Login from './componets/Home/Login/Login';
import Signup from './componets/Home/Signup/Signup';
import RequireAuth from './componets/RequireAuth/RequireAuth';
import CheckOut from './componets/Home/CheckOut/CheckOut';

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
