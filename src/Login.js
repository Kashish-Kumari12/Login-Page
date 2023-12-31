import { useState } from 'react'

import '../src/login.css';
const Login = () => {

  const [form,setForm] = useState({
    email:'',
    password:''
  })


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
     
    } else {
      alert(data.message);
    }
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label htmlFor="email" className="form-label">Email: </label>
        <input
          type='email'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            })
          }}
          id='email'
          placeholder='Enter your email here'
        />
        <label htmlFor='password' className="form-label">Password: </label>
        <input
          type='password'
          value={form.password}
          onChange={e => {
            setForm({
              ...form,
              password: e.target.value
            })
          }}
          id="password"
          placeholder='Enter password'
        />
        <input
          id='cbox'
          type='checkbox'
          className=""
        />
        <label>Remember Me</label>
        <button type='submit'>Log In</button>
      </form>
      <p>Don't have an account? SIGNUP</p> 
    </div>
  );
}

export default Login;