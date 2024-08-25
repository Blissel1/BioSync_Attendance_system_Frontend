import React from 'react';
import { useForm } from 'react-hook-form';
import './Registration.css'
import {useState } from 'react';



export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
 const [focusedInputs, setFocusedInputs] = useState({})
 const handleFocus =(event)=>{
  setFocusedInputs({...focusedInputs,[event.target.name]:true})
 }

  return (
    <div className='main'>
    <div className='background'>
      
      
      </div>
    <div className='form'onLoad={handleFocus}> 
     
    <form onSubmit={handleSubmit(onSubmit)} >
      <h2>Registration</h2>
      <div className='FirstName'>
        <label >Full Name</label>
        <input type="text" placeholder='Fullname'  {...register("Fullname", {required: true, maxLength: 80})} onFocus={handleFocus} /*onBlur={handleBlur}*/ />
      </div>
   
     
      
      <div> 
        <label >Email</label>
        <input type="text"  placeholder='Email' {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} onFocus={handleFocus}/>
      </div>
     
     
      <div>
        <label >Password</label>
        <input type="password"  placeholder='Password'
         {...register("Password", {})} onFocus={handleFocus}/>
      </div>
      <div>
        <label >Confirm Password</label>
        <input type="password"  placeholder='Confirm password' {...register("Confirm password", {})} onFocus={handleFocus}/>
      </div>

      <div className='button'><button type="submit">submit</button> </div>
    </form></div>
    </div>
  );
}

