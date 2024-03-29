import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import DeclaredList from './components/DeclaredList/DeclaredList'
import DeclaredDetails from './components/DeclaredDetails/DeclaredDetails'
import PotentialList from './components/PotentialList/PotentialList'
import PotentialDetails from './components/PotentialDetails/PotentialDetails'
import About from './components/About/About'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<DeclaredList />} />
        <Route path="/potential" element={<PotentialList />}/>
        <Route path="/details/:id" element={<DeclaredDetails />}/>
        <Route path="/potential/details/:id" element={<PotentialDetails />}/>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
