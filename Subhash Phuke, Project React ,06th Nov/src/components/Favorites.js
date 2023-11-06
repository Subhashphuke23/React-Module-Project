import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/bookActions';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const favorites = useSelector((state) => state.books.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (bookId) => {
    dispatch(removeFromFavorites(bookId));
  };

  return (
    <div>
      <h2>Favourites</h2>
      <ul>
  {favorites.map((book) => (
    <li key={book.id}>
         {book.volumeInfo.title && (
      <Link to={`/details/${book.id}`}>
          {book.volumeInfo.title}
        </Link>
         )}
      <button onClick={() => handleRemoveFromFavorites(book.id)}>
        Remove from Favorites
      </button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Favourites;
