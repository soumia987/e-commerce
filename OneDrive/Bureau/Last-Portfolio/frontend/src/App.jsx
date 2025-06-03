import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-15">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />
          <div className="flex-1">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <Home activePage={activePage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;