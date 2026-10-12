import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subastas from './pages/Subastas';
import Convenios from './pages/Convenios';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subastas" element={<Subastas />} />
            <Route path="/convenios" element={<Convenios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}