import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar grid">
      <h1> **GRID**Cosmo</h1>
      {/* //? Name a route */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
