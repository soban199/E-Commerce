import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VisibleContext } from "./LoginVisible";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { setLoginVisible } = useContext(VisibleContext);

  // Login Function
  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if there are any users in localStorage
    if (storedUsers.length === 0) {
      alert("You have no account. Please create one.");
      return;
    }

    // Check if any user matches the entered email and password
    const userExists = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', true); // Set login status
      setLoginVisible(false);
      navigate('/'); // Redirect to dashboard
    } else {
      alert('Incorrect email or password. Retry, or create an account if you don’t have one.');
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-8 p-6 bg-primary shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>

      <div>
        <label htmlFor="email" className="block text-sm text-prmary-dark after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-primary-dark after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
            required
          />
          <span
            className="absolute right-3 top-3 text-secondary cursor-pointer hover:text-primary-dark"
            onClick={() => setShow(!show)} // Toggle the show state
          >
            {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-secondary-light text-primary py-2 px-4 hover:bg-other-light hover:text-other-dark"
      >
        Login
      </button>

      <div className="mt-4 text-center underline">
       Forgot Your Password?
      </div>

      <div className="mt-4 text-center" onClick={()=>setLoginVisible(false)}>
       
      <Link to="/account">
          <button
        type="submit"
        className="w-full bg-primary-dark text-primary py-2 px-4 hover:bg-other-light hover:text-other-dark"
      >
        Create Account
      </button>
          </Link>
        
        
      </div>
    </form>
  );
};

export default Login;
