import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Register = () => {

    const {register, handleSubmit, formState: {errors}}= useForm()
    const{registerUser}= useAuth()

    const handleRegistration=(data)=>{
console.log(data.photo[0])
const profileImg=data.photo[0]

registerUser(data.email, data.password)
.then(result=>{
console.log(result.user)


// store the image and get the photo url
const formData= new FormData()
formData.append('image', profileImg)

// send the photo to store and get the URL
const image_API_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
axios.post(image_API_URL, formData)
.then(result=>{
    console.log(result.data.data.url)
})

// update user's photo here

const userProfile = {
    displayName: data.name,
    photoUrl: result.data.data.url
}
updateUserProfile(userProfile)
.then(()=>{
    console.log('user Profile update done')
})
.catch(error=>console.log(error))


})
.catch(error=>{
    console.log(error)
})



    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
             <h3 className='text-3xl text-center'>Welcome to ZapShift</h3>
            <p className='text-center'>Please register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                 
        <fieldset className="fieldset">

            {/* Name */}
          <label className="label">Name</label>
          <input type="text" {...register('email', {required: true})}className="input" placeholder="Your Name" />
{errors.name?.type==='required' && <p className='text-red-500'>Name is required.</p>}

            {/* Image */}
          <label className="label">Image</label>
          <input type="file" {...register('image', {required: true})}className="file-input" placeholder="Your Image" />
{errors.image?.type==='required' && <p className='text-red-500'>Image is required.</p>}

            {/* Email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})}className="input" placeholder="Email" />
{errors.email?.type==='required' && <p className='text-red-500'>Email is required.</p>}


          {/* Password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength:6, })} className="input" placeholder="Password" />

{errors.password?.type==='required' && <p className='text-red-500'>Password is required.</p>}
{errors.password?.type==='required' && <p className='text-red-500'>Password must be at 6 characters.</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
     <p>Already have an account? <Link className='text-blue-400 underline' to='/login'>Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;