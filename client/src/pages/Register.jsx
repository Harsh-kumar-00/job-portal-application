import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker",
    workType: "",
  });

  const cardRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const card = cardRef.current;
    const allFilled = Object.values(form).every(v => v.trim() !== "");

    card.classList.remove("error", "success");

    if (allFilled) {
      card.classList.add("success");
      setTimeout(() => card.classList.remove("success"), 800);
    } else {
      card.classList.add("error");
      setTimeout(() => card.classList.remove("error"), 400);
    }
  };

  return (
    <div ref={cardRef} className="page">
      <div
        className="tilt-layer"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          e.currentTarget.style.transform =
            `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg)";
        }}
      >
        <h2>Create Account</h2>
        <p>Start your journey with us</p>

        <div className="role-group">
          <label className="role-option">
            <input
              type="radio"
              name="role"
              value="seeker"
              checked={form.role === "seeker"}
              onChange={handleChange}
            />
            Job Seeker
          </label>

          <label className="role-option">
            <input
              type="radio"
              name="role"
              value="recruiter"
              checked={form.role === "recruiter"}
              onChange={handleChange}
            />
            Recruiter
          </label>
        </div>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          name="workType"
          placeholder={
            form.role === "seeker"
              ? "Type of work you are seeking"
              : "Type of work you are providing"
          }
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Register</button>

        <div className="link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
