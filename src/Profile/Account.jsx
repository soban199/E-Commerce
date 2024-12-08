import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [show, setShow] = useState(false);
 const [fName, setfName]=useState('');
 const [laName, setLaName]=useState('');
 const [email, setEmail]=useState('');
 const [password, setPassword]=useState('')
 const [userName, setUserName]=useState('')

 const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignup = () => {
      // Fetch existing users from local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
      // Check if the email is already registered
      const isEmailExist = storedUsers.some(user => user.email === email);
      if (isEmailExist) {
        alert('Email already exists!');
        return;
      }

       // Check if the username is already registered
       const isUsernameExist = storedUsers.some(user => user.userName === userName);
       if (isUsernameExist) {
         alert('Username already exists!');
         return;
       }
    // Add the new user to the local storage
    if (userName && email && password) {
      const newUser = { fName, laName, userName, email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Signup Successful!');
      navigate('/login');
    } else {
      alert('Error!');
    }
  };
    

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-primary shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Create Account</h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-light after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={fName}
          onChange={(e)=>setfName(e.target.value)}
          className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-light after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="laName"
          name="laName"
          value={laName}
          onChange={(e)=>setLaName(e.target.value)}
          className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
          required
        />
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-secondary-light after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-light after:content-['*'] after:ml-0.5 after:text-secondary-dark block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mt-1 p-2 border focus:ring-primary-dark focus:border-secondary-light"
          required
        />
      </div>
      <div className="relative">
  <label
    htmlFor="password"
    className="block text-sm font-medium text-secondary-light after:content-['*'] after:ml-0.5 after:text-secondary-dark"
  >
    Password
  </label>
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
    className="absolute right-3 top-3/4 transform -translate-y-1/2 cursor-pointer md:right-4"
    onClick={() => setShow(!show)}
  >
    {show ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

      <button
      onClick={handleSignup}
        type="submit"
        className="w-full bg-primary-dark text-primary py-2 px-4 hover:bg-primary hover:text-primary-dark border-2">
      
        Sign Up
      </button>
    </form>
  
   
    </>
  
  );
};

export default Account;
