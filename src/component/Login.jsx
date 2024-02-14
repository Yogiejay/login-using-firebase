import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import {signInWithEmailAndPassword} from "firebase/auth";
function Signup() {
    const [email , setEmail ] = useState();
    const [password , setPassword ] = useState();
    const navigate = useNavigate();
    const onLogin = async(e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        .then((user)=>{
            navigate("/");
        })
        .catch((error)=>{
            const ErrorMessage = error.message;
            const ErrorCode = error.code;
            alert(`${ErrorCode} : Error is ${ErrorMessage}`);
        })
    }

  return (
        <div>                                                                 
                                            
            <form>                                              
                <div>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"                                    
                        required                                                                                
                        placeholder="Email address"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"                                    
                        required                                                                                
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                                    
                <div>
                    <button                                    
                        onClick={onLogin}                                        
                    >      
                        Login                                                                  
                    </button>
                </div>                               
            </form>
            
            <p className="text-sm text-white text-center">
                No account yet? {' '}
                <Link to="/signup">
                    Sign up
                </Link>
            </p>
                                        
        </div>
            
  )
}

export default Signup