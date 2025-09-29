import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard"; // Impor komponen baru

/**
 * Komponen utama untuk halaman Album
 */
function AlbumPage() {
	// Mengambil data dan fungsi dari context Outlet
	const { books, addBook } = useOutletContext();

	return (
		<>
			{/* Main Content */}
			<section className="py-5 text-center container bg-dark text-white">
				<div className="row py-lg-5">
					<div className="col-lg-6 col-md-8 mx-auto">
						<h1>Koleksi Buku</h1>
						<p className="lead text-white-50">
							Jelajahi berbagai koleksi buku kami yang akan menambah wawasan dan keahlian Anda.
						</p>
						<p className="d-flex gap-2 justify-content-center">
							<a href="#" onClick={(e) => e.preventDefault()} className="btn btn-primary my-2">
								Mulai Membaca
							</a>
							<a href="#" onClick={(e) => e.preventDefault()} className="btn btn-secondary my-2">
								Lihat Penawaran
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Album Cards */}
			<div className="album py-5 bg-body-tertiary">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{/* Cards di sini */}
						{books.map((book) => (
							<BookCard key={book.id} book={book} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default AlbumPage;