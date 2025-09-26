import './App.css'
import contactImage from './23040700073 (1).jpg'; // Asumsikan gambar ada di folder src



function App() {
  
  return (
    <>
      {/* Header */}
      <div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow-sm">
    <div className="col-md-3 mb-2 mb-md-0">
      <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
        <i className="fa-solid fa-house-user fa-xl" style={{ color: "#74C0FC" }}></i>
        <span className='ms-2 fs-4'>NF Academy</span>
      </a>
    </div>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2">Home</a></li>
      <li><a href="#team" className="nav-link px-2">Team</a></li>
      <li><a href="#contact" className="nav-link px-2">Contact</a></li>
    </ul>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
      <button type="button" className="btn btn-primary">Register</button>
    </div>
  </header>

  {/* Hero */}
  <div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome !</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ligula in elit efficitur eleifend. Etiam viverra lectus eget nibh placerat laoreet. Nam mauris tellus, faucibus quis euismod et, congue a nisi. Maecenas ac scelerisque ipsum. 
        Nunc mi dui, ullamcorper vel pharetra sed, iaculis at tortor. Suspendisse eu aliquam augue, vitae placerat nunc. Vivamus varius libero in iaculis scelerisque.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Started</button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
      <img className="rounded-lg-3" src="https://picsum.photos/800/720" alt="" width="720"/>
    </div>
  </div>
  </div>

  {/* Team */}
  <div className="container px-4 py-5" id="team">
    <h2 className="pb-2 border-bottom text-center">Our Team</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 shadow rounded-3">
      {/* Team Member 1 */}
      <div className="col d-flex align-items-start">
        <div className="text-center w-100">
          <img src="https://i.pravatar.cc/150?img=1" className="rounded-circle mb-3" alt="Team Member 1" width="140" height="140" />
          <h4 className="fw-bold mb-0">John Doe</h4>
          <p>Lead Developer</p>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col d-flex align-items-start">
        <div className="text-center w-100">
          <img src={contactImage} className="rounded-circle mb-3" alt="Team Member 2" width="140" height="140" />
          <h4 className="fw-bold mb-0">Adji Saputra</h4>
          <p>UI/UX Designer</p>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col d-flex align-items-start">
        <div className="text-center w-100">
          <img src="https://i.pravatar.cc/150?img=3" className="rounded-circle mb-3" alt="Team Member 3" width="140" height="140" />
          <h4 className="fw-bold mb-0">Peter Jones</h4>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact */}
  <div className="container px-4 py-5" id="contact">
    <h2 className="pb-2 border-bottom text-center">Contact Me</h2>
    <div className="row justify-content-center align-items-center py-5 shadow rounded-3">
      <div className="col text-center">
        <img src={contactImage} className="rounded-circle mb-3" alt="Contact Person" width="140" height="140" />
        <h4 className="fw-bold mb-1">Adji Setyawan Saputra</h4>
        <p className="text-muted">Fullstack Web Developer</p>
        <div className="mt-3">
          <a href="https://github.com/Adji18292" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/adji-setyawan-saputra-911933328/" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/adjistiawnsptra/" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  </div>
  
  {/* Footer */}
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
        <li className="nav-item"><a href="#team" className="nav-link px-2 text-white">Team</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link px-2 text-white">Contact</a></li>
      </ul>
      <div className="text-center mb-3">
        <a href="https://github.com/Adji18292" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-github"></i></a>
        <a href="www.linkedin.com/in/adji-setyawan-saputra-911933328" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/adjistiawnsptra/" className="link-body-emphasis text-decoration-none mx-2 fs-4 text-white"><i className="fa-brands fa-instagram"></i></a>
      </div>
      <p className="text-center text-white-50">&copy; 2025 Adji Setyawan Saputra - Fullstack Web Developer</p>
    </div>
  </footer>

    </>
  );
}

export default App
