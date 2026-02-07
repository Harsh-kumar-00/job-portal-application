import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h2>Job Portal</h2>

      <p className="subtitle">
        One place to discover jobs, track applications, and get hired faster.
      </p>

      <ul className="features">
        <li>
          <span className="icon">🔍</span>
          <span>Search jobs from multiple companies</span>
        </li>
        <li>
          <span className="icon">📄</span>
          <span>Apply and track applications easily</span>
        </li>
        <li>
          <span className="icon">🔐</span>
          <span>Secure login for candidates and recruiters</span>
        </li>
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
