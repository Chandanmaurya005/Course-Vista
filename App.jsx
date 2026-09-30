import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <h2>CourseVista</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">LEARN WITHOUT LIMITS</span>

          <h1>
            Learn New Skills.
            <br />
            Build Your Future.
          </h1>

          <p>
            Explore high-quality courses, learn from experts,
            and build the skills you need to achieve your goals.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="primary-btn">
              Explore Courses
            </Link>

            <Link to="/signup" className="secondary-btn">
              Get Started
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-icon">🎓</div>
          <h2>Learn. Grow. Succeed.</h2>
          <p>Start your learning journey today.</p>
        </div>
      </section>

      <section className="learning-section">
        <div className="section-heading">
          <span>EXPLORE OUR COURSES</span>
          <h2>Learn Something New</h2>
          <p>
            Choose from our wide range of courses and start learning today.
          </p>
        </div>

        <div className="course-grid">
          <div className="course-card">
            <div className="course-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Learn HTML, CSS, JavaScript and build modern websites.
            </p>

            <Link to="/course/web">View Course →</Link>
          </div>

          <div className="course-card">
            <div className="course-icon">⚛️</div>
            <h3>React JS</h3>
            <p>
              Learn React and create powerful modern web applications.
            </p>

            <Link to="/course/react">View Course →</Link>
          </div>

          <div className="course-card">
            <div className="course-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>
              Learn the fundamentals of AI and machine learning.
            </p>

            <Link to="/course/ai">View Course →</Link>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <h2>CourseVista</h2>
          <p>
            Learn new skills, build your future, and achieve your goals
            with CourseVista.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Courses</Link>
          <Link to="/login">Login</Link>
        </div>

        <div>
          <h3>Learning</h3>
          <Link to="/course/web">Web Development</Link>
          <Link to="/course/react">React JS</Link>
          <Link to="/course/ai">Artificial Intelligence</Link>
        </div>
      </footer>

      <div className="copyright">
        © 2026 CourseVista. All rights reserved.
      </div>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">🎓</div>

        <h1>Welcome Back</h1>

        <p>Login to your CourseVista account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">🎓</div>

        <h1>Create Account</h1>

        <p>Join CourseVista today</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>CourseVista</h2>

        <nav>
          <Link to="/dashboard">🏠 Dashboard</Link>
          <Link to="/">🌐 Home</Link>
          <Link to="/dashboard">📚 My Courses</Link>
          <Link to="/dashboard">📊 Progress</Link>
          <Link to="/login">🚪 Logout</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>Welcome back! 👋</h1>
            <p>Continue learning and achieve your goals.</p>
          </div>

          <div className="profile">
            <div className="profile-icon">C</div>

            <div>
              <strong>Chandan</strong>
              <span>Student</span>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h3>3</h3>
            <p>Enrolled Courses</p>
          </div>

          <div className="stat-card">
            <h3>1</h3>
            <p>Completed Courses</p>
          </div>

          <div className="stat-card">
            <h3>65%</h3>
            <p>Overall Progress</p>
          </div>

          <div className="stat-card">
            <h3>12</h3>
            <p>Learning Hours</p>
          </div>
        </div>

        <section className="courses-dashboard">
          <div className="section-title">
            <h2>My Courses</h2>
            <p>Continue your learning journey</p>
          </div>

          <div className="dashboard-cards">
            <DashboardCard
              icon="💻"
              title="Web Development"
              description="Learn HTML, CSS and JavaScript."
              progress="70%"
              progressClass="web-progress"
              link="/course/web"
            />

            <DashboardCard
              icon="⚛️"
              title="React JS"
              description="Build modern web applications."
              progress="45%"
              progressClass="react-progress"
              link="/course/react"
            />

            <DashboardCard
              icon="🤖"
              title="Artificial Intelligence"
              description="Learn AI and Machine Learning."
              progress="30%"
              progressClass="ai-progress"
              link="/course/ai"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({
  icon,
  title,
  description,
  progress,
  progressClass,
  link
}) {
  return (
    <div className="dashboard-card">
      <div className="course-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="progress-bar">
        <div className={`progress ${progressClass}`}></div>
      </div>

      <span className="progress-text">
        {progress} Complete
      </span>

      <Link to={link} className="course-button">
        Continue Learning
      </Link>
    </div>
  );
}

function Course({ title, icon, description }) {
  return (
    <div className="course-page">
      <div className="course-detail">
        <div className="course-big-icon">{icon}</div>

        <h1>{title}</h1>

        <p>{description}</p>

        <button className="primary-btn">
          Start Learning
        </button>

        <br />
        <br />

        <Link to="/dashboard" className="back-dashboard">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/course/web"
          element={
            <Course
              title="Web Development"
              icon="💻"
              description="Learn HTML, CSS and JavaScript."
            />
          }
        />

        <Route
          path="/course/react"
          element={
            <Course
              title="React JS"
              icon="⚛️"
              description="Build modern web applications using React."
            />
          }
        />

        <Route
          path="/course/ai"
          element={
            <Course
              title="Artificial Intelligence"
              icon="🤖"
              description="Learn AI and Machine Learning."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;