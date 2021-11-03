import { useState } from "react";
import { Button } from 'react-bootstrap';
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  console.log(username);

  let handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  console.log(password);
  return (
    <div className="Login">
      <div>
        <div>
          {/* <h4>Username</h4> */}
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Username"
            onChange={handleChangeUsername}
          />
          {/* <h4>Password</h4> */}
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
          <Button variant="primary" onClick={() => console.log(username, password)}>Login</Button>
          {/* <button onClick = {handleLogin}>Login</button> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
