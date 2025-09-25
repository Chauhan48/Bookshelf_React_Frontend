import { ApolloProvider } from '@apollo/client/react';
import client from './apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL Book Library</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;