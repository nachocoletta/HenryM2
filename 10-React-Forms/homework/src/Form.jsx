import React, { useState } from 'react';

export default function Form() { 
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({username: '', password: ''});

  function handleChangeU(e){
    let valor = e.target.value;

    setUserName(valor);
    setError(handleError());
  }

  function handleChangeP(e){
    let valor = e.target.value;

    setPassword(valor);
    setError(handleError());
  }

  function handleError(){
  let errors = {};
  if (!username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(username)) {
    errors.username = 'Username is invalid';
  }
  if(!password){
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(password)) {
    errors.password = 'Password is invalid';
  }
  

  return errors;
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChangeU}
          
        />
        <p className="danger">{error.username}</p>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChangeP}
        />
        <p className="danger">{error.password}</p>
      </div>
    </form>
  )
}