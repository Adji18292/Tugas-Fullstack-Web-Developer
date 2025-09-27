import contactImage from '../23040700073 (1).jpg';

function ContactPage() {
  return (
    <div className="container px-4 py-5" id="contact">
      <h2 className="pb-2 border-bottom text-center">Contact Me</h2>
      <div className="row justify-content-center align-items-center py-5 shadow rounded-3">
        <div className="col text-center">
          <img src={contactImage} className="rounded-circle mb-3" alt="Contact Person" width="140" height="140" />
          <h4 className="fw-bold mb-1">Adji Setyawan Saputra</h4>
          <p className="text-muted">Fullstack Web Developer</p>
          <div className="mt-3">
            <a href="https://github.com/Adji18292" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/adji-setyawan-saputra-911933328" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/adjistiawnsptra/" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/6289510026619" target="_blank" rel="noopener noreferrer" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="mailto:marqadji93@gmail.com" className="link-body-emphasis text-decoration-none mx-2 fs-4"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;