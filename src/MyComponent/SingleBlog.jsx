import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../Firebase'
import { getDoc,doc,collection, setDoc } from 'firebase/firestore'
import Navbar from './Navbar'
const SingleBlog = () => {
  // console.log(useParams())
  const {id}=useParams()

  const [data, setData]=useState({})
  const colldef=collection(db,'blog');
 
  const singledata=doc(db,'blog',id);
  useEffect(()=>{
 const singlefetch=()=>{
  getDoc(singledata).then((doc)=>setData(doc.data()))

 }
 singlefetch()

  },[id])
  return (
    <>
    
    <Navbar/>
   <div className="container d-flex justify-content-center align-items-center my-3">
    <div className="left-img">
      <img src={data.img} alt='firebase' className='img-fluid'style={{width:"60%" }}/>
    </div>

    <div className="right-data d-flex justify-content-center align-items-center flex-column">
    <div className="user-content  d-flex justify-content-center align-items-center">
      <img src={data.authorImg} alt="" 
      style={{width:"10%", borderRadius:"50%",margin:"0.5rem"}}/>
      <h4>{data.authorName}</h4>
      </div>
      <div className='text-center'>
      <h2>{data.Title}</h2>
      <h3>{data.ShortDiscription}</h3>
      <h5>{data.FullDiscription}</h5>
      </div>
    </div>
   </div>
    </>
  )
}

export default SingleBlog
