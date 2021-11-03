import { useState } from "react";
import { Button } from 'react-bootstrap';
function Login2() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  
  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  console.log(user);

  return (
    <div className="Login2">
      <div>
        <input
          type="text"
          value={user.username}
          name="username"
          placeholder="Username"
          onChange={handleChangeUser}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handleChangeUser}
        />
        <Button variant="primary"onClick={() => (console.log(user.username, user.password))}>Login</Button>
      </div>
    </div>
  );
}
export default Login2;
