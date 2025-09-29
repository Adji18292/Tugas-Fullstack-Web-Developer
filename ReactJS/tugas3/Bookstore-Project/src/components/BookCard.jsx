import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  // Fallback untuk deskripsi jika terlalu panjang
  const shortDescription = book.description.length > 100 
    ? `${book.description.substring(0, 100)}...` 
    : book.description;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
          width="100%"
          height="225"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text flex-grow-1">{shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div className="btn-group">
              <Link to="/album" className="btn btn-sm btn-outline-secondary">
                Lihat Detail
              </Link>
            </div>
            <small className="text-body-secondary">{book.author}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;