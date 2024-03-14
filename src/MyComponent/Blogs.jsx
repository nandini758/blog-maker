import React, {useEffect, useState } from 'react'
import Navbar from './Navbar'
import { getAuth } from 'firebase/auth'
import { db } from '../Firebase'
import { onSnapshot,collection,doc,deleteDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  
  const auth=getAuth()
  const collref= collection(db,'blog');
  const [data,setData]=useState([]);
  useEffect(()=>{
 const getData=()=>{
onSnapshot(collref,(snapshot)=>{
  setData(snapshot.docs.map((doc)=>({
    ...doc.data(),id:doc.id
  })))
})

 }
 getData()
//  console.log(data);
  }, [])

const deletedata= async(id)=>{
  const data=doc(db,'blog',id);
  alert("your data will be deleted forever!");
  await deleteDoc(data);
  toast.success('your Blog is deleted!', {
    position: "top-right",
    autoClose: 20000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    
}

  return (
    <>
     <ToastContainer
position="top-right"
autoClose={20000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Navbar/>
      {
        data.map((data)=>{
          return (
        <>
         <div className='container d-flex justify-content-center align-items-center flex-column my-3'>
      <div className="container">
    <div className="user-content  d-flex justify-content-center align-items-center" style={{width:"70%"}}>
      <img src={data.authorImg} alt="" style={{width:"5%", borderRadius:"50%",margin:"0.5rem"}}/>
      <h4>{data.authorName}</h4>
      </div>
      </div>
    <div className="card mb-3 bg-secondary" style={{maxWidth: "700px"}}>
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <img src={data.img} className="img-fluid rounded-start" alt="..." style={{width:"65%"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center text-white">
        <h4 className="card-title">{data.Title}</h4>
        <h6 className="card-text">{data.ShortDiscription}</h6>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
   
      <Link to={`/SingleBlog/${data.id}`} className='btn btn-primary mx-3'>View More</Link>
      <button 
      onClick={()=>deletedata(data.id)}
      className='btn btn-danger'
      >Delete</button>
      </div>
    </div>
  </div>
</div>
    </div>

        </>
          )
        })
        

      }
    
   
    </>
  )
}

export default Blogs
