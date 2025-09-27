function HomePage() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h2 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome !</h2>
          <p className="lead">Terima kasih sudah berkunjung ke Website kami. Kami percaya setiap kunjungan adalah awal dari cerita baru. Mari jelajahi 
            konten dan layanan kami, semoga Anda menemukan sesuatu yang bermanfaat dan membuat hari Anda lebih baik.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Started</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://picsum.photos/720/700" alt="" width="720" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;