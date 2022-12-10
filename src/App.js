import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [submittext, setSubmittext] = useState('user');
  const [passwordmsg, setPasswordmsg] = useState('');

  function display(e) {
    e.preventDefault();
    password == 'user123'
      ? setSubmittext(name)
      : setPasswordmsg('wrong password');

    setName('');
    setPassword('');
  }
  return (
    <>
      <form onSubmit={display}>
        <label>Enter your name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Enter your password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <p>{passwordmsg}</p>
      <p>welcome {submittext} </p>
    </>
  );
}

export default App;
