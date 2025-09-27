import { Outlet, Link, NavLink } from 'react-router-dom';
import nfLogo from '../assets/LOGO NF.png'; // 1. Impor logo dari folder assets

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow-sm">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex align-items-center">
              {/* 2. Ganti ikon dan teks dengan tag img */}
              <img src={nfLogo} alt="NF Academy Logo" style={{ height: '32px' }} />
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className={({ isActive }) => `nav-link px-2 ${isActive ? 'link-dark fw-bold' : 'link-secondary'}`}>Home</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => `nav-link px-2 ${isActive ? 'link-dark fw-bold' : 'link-secondary'}`}>Team</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `nav-link px-2 ${isActive ? 'link-dark fw-bold' : 'link-secondary'}`}>Contact</NavLink></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* Konten Halaman akan dirender di sini */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/team" className="nav-link px-2 text-white">Team</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
          </ul>
          <div className="text-center mb-3">
            <a href="https://github.com/Adji18292" target="_blank" rel="noopener noreferrer" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/adji-setyawan-saputra-911933328" target="_blank" rel="noopener noreferrer" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/adjistiawnsptra/" target="_blank" rel="noopener noreferrer" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/6289510026619" target="_blank" rel="noopener noreferrer" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="mailto:marqadji93@gmail.com" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <p className="text-center text-white-50">&copy; 2025 Adji Setyawan Saputra - Fullstack Web Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;