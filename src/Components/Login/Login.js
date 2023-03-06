import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleFormSubmit = data => {
        console.log(data);

    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' w-96 p-7 shadow-lg rounded-lg'>
                <h1 className='text-xl text-center text-sky-400 te my-5'>Login</h1>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className='mb-5'>
                        <leble>Email</leble>
                        <input
                            type='email'
                            name='email'
                            {...register("email", { required: true })}
                            className='border rounded-lg w-full p-2'
                            placeholder='Enter Your Email' />
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>
                    <div className=''>
                        <leble>Password</leble>
                        <input
                            type='password'
                            name='password'
                            {...register("password", { required: true })}
                            className='border rounded-lg w-full p-2'
                            placeholder='Enter Your password' />
                        {errors.password && <span className='text-red-500'>Password is required</span>}
                    </div>
                    <p className='text-sm text-gray-500 mb-5 hover:underline'><i>Forgot password?</i></p>

                    <div className='w-full'>
                        <button className='w-full bg-sky-400 hover:bg-sky-500 py-2 rounded-lg font-semibold text-white'>Register</button>
                    </div>
                    <p className='text-center my-5 text-gray-700'><Link to='/register'>Are you new to Here?<span className='text-blue-500 hover:underline'>Please Register</span></Link></p>
                    {/* <div className='w-full my-5'>
                        <button className='w-full border-2 hover:bg-sky-500 hover:text-white py-2 rounded-lg font-semibold'>Sign in with google</button>
                    </div> */}
                </form>

            </div>
        </div>
    );
};

export default Login;