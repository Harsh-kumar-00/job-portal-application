import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="page">
      <h2>Welcome Back</h2>
      <p>Login to continue</p>

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button>Login</button>

      <div className="link">
        New user? <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
