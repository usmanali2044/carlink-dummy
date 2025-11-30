import React from 'react'
import Input from '../components/Input';
import {Mail, User, UserIcon,Lock} from 'lucide-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignupPage = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSignUp = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='h-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-emerald-500 
        text-transparent bg-clip-text'>Create Account</h2>

        <form onSubmit={handleSignUp} action="">
            <Input icon={User} type="text" placeholder="Fullname"
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />
             <Input icon={Mail} type="text" placeholder="Email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
            />

             <Input icon={Lock} type="password" placeholder="password"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button className='bg-green-700 px-7 py-2' type='submit'>SignUp</button>
            <p>Alread have an account
                <Link to={"/login"}>Login</Link>
            </p>
        </form>
    </div>
  )
}

export default SignupPage