import { useState } from "react";
import "./login.css";
import { FaCookie, FaExclamationTriangle, FaFingerprint, FaFolderOpen, FaHeart, IconName } from "react-icons/fa";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="logo-container">
      <FaFingerprint />
      </div>
      <form className="form" onSubmit={handleLogin}>
        <h1 className="title">Log In</h1>
        <div className="form-field">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button">Log In</button>
        <div className="description">
          Don't have an account?{" "}
          <a className="link" href="/signup">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
