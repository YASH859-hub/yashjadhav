/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Engineering from './pages/Engineering';
import Research from './pages/Research';
import Writing from './pages/Writing';
import Now from './pages/Now';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/research" element={<Research />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/now" element={<Now />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
