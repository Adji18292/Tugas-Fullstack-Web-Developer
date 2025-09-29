import { Link, useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard"; 

function HomePage() {
  const { books } = useOutletContext(); // Ambil data buku dari context
  const featuredBooks = books.slice(0, 3); // Ambil 3 buku pertama dari state

  return (
    <>
      {/* Hero Section */}
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

      {/* Featured Books Section */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="pb-2 border-bottom text-center mb-4">Featured Books</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/album" className="btn btn-primary">
              Lihat Semua Koleksi Buku
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;