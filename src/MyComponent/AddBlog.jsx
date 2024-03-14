import React, { useState } from 'react'
import Navbar from './Navbar'
import { db } from '../Firebase'
import { addDoc,collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
  const navigate=useNavigate()
  const auth=getAuth()
 const [fromData, setFromData]=useState({
  Title:'',
  ShortDiscription:'',
  FullDiscription:'',
  img:'',
  authorName:auth.currentUser.displayName,
  authorImg:auth.currentUser.photoURL
 }) 
 const handleChange =(e)=>{
// console.log("fromData.Title")
setFromData({...fromData,[e.target.name]:e.target.value})
// console.log(fromData.Title)
 }
 const formRef=collection(db,"blog")
 const submitHandler= async(e)=>{
  e.preventDefault();
  await addDoc(formRef,fromData);
 
  console.log("Data Submitted")
 
 setFromData({
  Title:'',
  ShortDiscription:'',
  FullDiscription:'',
  img:''
})
toast.success('Your Blog submitted!', {
  position: "top-right",
  autoClose: 20000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });
  setTimeout(()=>{
    navigate('/Blogs')
  },25000);
  
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
    
    <div className="container my-3" style={{width:"60%",lineHeight:'0.8rem'}}>
    <form onSubmit={submitHandler} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input
    value={fromData.Title}
    name="Title"
    onChange={handleChange}
     type="text" 
     className="form-control" 
     id="exampleInputEmail1"
      aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Short Description</label>
    <input
    value={fromData.ShortDiscription}
    name="ShortDiscription"
    onChange={handleChange}
     type="text"
      className="form-control"
       id="exampleInputEmail1" 
       aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Discription</label>
   <textarea
   name='FullDiscription'
   value={fromData.FullDiscription}
   onChange={handleChange}
    class="form-control"
     id="exampleFormControlTextarea1"
      rows="3"></textarea>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">image Url</label>
    <input
    name='img'
    value={fromData.img}
    onChange={handleChange}
     type="text"
      className="form-control"
       id="exampleInputEmail1" 
       aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary">Add blog</button>
</form>
</div>
    </>
  )
}

export default AddBlog;
