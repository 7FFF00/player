import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const songId = window.location.search.split('=')[1] || 0;

ReactDOM.render(<App songId={songId} />, document.getElementById('player'));
