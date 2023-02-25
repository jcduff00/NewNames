import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import DeclaredList from './DeclaredList'
import DeclaredDetails from './DeclaredDetails'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<DeclaredList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<DeclaredDetails />}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
