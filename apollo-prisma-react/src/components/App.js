import React from 'react';
import LinkList from 'components/LinkList';
import CreateLink from 'components/CreateLink'
import 'styles/App.css';

function App() {
  return (
    <>
      <LinkList />

      <hr />
      <CreateLink />
    </>
  );
}

export default App;
