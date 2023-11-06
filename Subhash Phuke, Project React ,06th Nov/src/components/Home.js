// // src/components/Home.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Home.css';

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     // Replace 'YOUR_API_KEY' with your actual Google Books API key
//     const apiKey = 'AIzaSyBZ5T3JGt_FYq1D9VGMc79wjt9P1szvZyg';
//     const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

//     try {
//       setLoading(true);
//       setError('');

//       const response = await axios.get(apiUrl);
//       setBooks(response.data.items || []);
//     } catch (error) {
//       setError('Error fetching data. Please try again.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form className="search-bar" onSubmit={handleSearch}>
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search for books by title, author, or keywords..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit" className="search-button">
//           Search
//         </button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="book-list">
//         {books.map((book) => (
//           <div key={book.id} className="book-item">
//             <img
//               src={book.volumeInfo.imageLinks?.thumbnail || ''}
//               alt={book.volumeInfo.title}
//               className="book-thumbnail"
//             />
//             <div className="book-details">
//               <h3>{book.volumeInfo.title}</h3>
//               <p>Authors: {book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    // Replace 'YOUR_API_KEY' with your actual Google Books API key
    const apiKey = 'AIzaSyBZ5T3JGt_FYq1D9VGMc79wjt9P1szvZyg';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

    try {
      setLoading(true);
      setError('');

      const response = await axios.get(apiUrl);
      setBooks(response.data.items);
    } catch (error) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for books by title, author, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <Link to={`/book/${book.id}`} className="book-link">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || ''}
                alt={book.volumeInfo.title}
                className="book-thumbnail"
              />
              <div className="book-details">
                <h3>{book.volumeInfo.title}</h3>
                <p>Authors: {book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
