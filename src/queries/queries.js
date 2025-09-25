import { gql } from '@apollo/client';

// Query to get all books
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

// Query to get all authors
export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      age
    }
  }
`;

// Query to get a single book
export const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`;

// Mutation to add a book
export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

// Mutation to add an author
export const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;