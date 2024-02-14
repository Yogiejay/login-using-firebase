import React , { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth} from "../firebase/firebase-config";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth , email , password)
    .then((userCredential)=>{
      const user = userCredential.user;
      navigate("/login")
    }).catch((error)=>{
      const ErrorCode = error.code;
      const ErrorMessage = error.message;
      alert(`${ErrorCode} : ths is ${ErrorMessage}`);
    })

  };
  return (
    <div>
      <h1> FocusApp </h1>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>

      <p>
        Already have an account?
        <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default Login;
