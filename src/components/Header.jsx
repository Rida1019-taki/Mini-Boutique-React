function Header({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div>
        <div className="navbar-brand">⚡ Mini Boutique</div>
        <span className="navbar-tagline">Boutique Électronique</span>
      </div>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Header;
