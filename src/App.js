
import './App.css';
import Login from './MyComponent/Login';
import Blogs from './MyComponent/Blogs';
import AddBlog from './MyComponent/AddBlog';
import SingleBlog from './MyComponent/SingleBlog';
import { Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate=useNavigate();
  return (
    <>
   
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/Blogs" Component={Blogs}/>
      <Route path="/AddBlogs" Component={AddBlog}/>
      <Route path="/SingleBlog/:id" Component={SingleBlog}/>
      
      
    </Routes>

  
    </>
  );
}

export default App;
