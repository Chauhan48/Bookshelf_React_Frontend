import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { ADD_BOOK, GET_BOOKS, GET_AUTHORS } from '../queries/queries';

function AddBook() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  // Get authors for dropdown
  const { data: authorsData } = useQuery(GET_AUTHORS);

  // Mutation hook
  const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
    // Refetch queries after mutation to update UI
    refetchQueries: [{ query: GET_BOOKS }],
    onCompleted: () => {
      // Reset form after successful submission
      setName('');
      setGenre('');
      setAuthorId('');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && genre && authorId) {
      addBook({
        variables: {
          name,
          genre,
          authorId
        }
      });
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Author:</label>
          <select
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          >
            <option value="">Select Author</option>
            {authorsData?.authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Book'}
        </button>
        
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default AddBook;