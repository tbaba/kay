import React, { useState } from 'react';
import axios from 'axios';

type Doc = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const docs = [
    {
      id: 1,
      title: '最初のドキュメント',
      body: 'これが俺達の最初のドキュメントですよっと。\n分かる？',
    },
    {
      id: 2,
      title: '2つ目のドキュメント',
      body: '2つ目のドキュメントだよ。ちょっと適当。',
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Kay</h1>
      </header>
      <div className="docs">
        {docs.map((document: Doc) => (
          <article key={document.id}>
            <header>
              <h2>{document.title}</h2>
            </header>
            <div className="docs-body">{document.body}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
