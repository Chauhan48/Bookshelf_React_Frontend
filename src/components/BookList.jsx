import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_BOOKS } from '../queries/queries';

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      {loading}
      {error}
      <ul>
        {data.books.map(book => (
          <li key={book.id}>
            <strong>{book.name}</strong> ({book.genre})
            {book.author && <span> by {book.author.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;