import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Job Portal</h1>
      <p className="subtitle">
        One place to discover jobs, track applications, and get hired faster.
      </p>

      <ul className="features">
        <li>🔍 Search jobs from multiple companies</li>
        <li>📄 Apply and track applications easily</li>
        <li>🔐 Secure login for candidates and recruiters</li>
      </ul>

      <div className="cta">
        <Link to="/login">
          <button className="primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="secondary">Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
