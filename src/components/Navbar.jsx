import { NavLink } from 'react-router'

function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" aria-label="StudentHub home">
          <span className="brand-mark">S</span>
          <span>StudentHub</span>
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
