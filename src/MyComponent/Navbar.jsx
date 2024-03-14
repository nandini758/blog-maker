import React from 'react'
import { getAuth } from 'firebase/auth'
import { Link,useNavigate, useLocation} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const auth=getAuth()
  const location=useLocation()
  console.log(getAuth());
  const logOut=()=>{
    auth.signOut();
    navigate('/')
  }
  // console.log(useLocation())
 
  
  return (
    <>
    <div className='bg-primary  d-flex  align-items-center p-1' style={{justifyContent:"space-between"}}>
      <div className="user-content  d-flex justify-content-center align-items-center">
      <img src={auth?.currentUser.photoURL} alt="" style={{width:"20%", borderRadius:"50%",marginRight:"1rem"}}/>
      <h3>{auth?.currentUser.displayName}</h3>
      
      </div>
     <div className='email  d-flex justify-content-center align-items-center'style={{gap:"1rem"}}>
      {(location.pathname==='/Blogs') && (<Link to={"/AddBlogs"} className='btn btn-warning' >AddBlog</Link>)}
      {(location.pathname !=='/Blogs') && (<Link to={"/Blogs"} className='btn btn-warning' >BackToBlogs</Link>)}
      <h3>{auth?.currentUser.email}</h3>
      <button
      onClick={logOut}
      className='btn btn-danger'>Log Out</button>
    </div>
    </div> 
    </>
  )
}

export default Navbar;
