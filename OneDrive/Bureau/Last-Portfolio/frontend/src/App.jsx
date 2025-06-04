import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const changePage = (page) => {
    setActivePage(page);
  };

  const openTestimonialModal = (testimonial) => {
    setActiveTestimonial(testimonial);
  };

  const closeTestimonialModal = () => {
    setActiveTestimonial(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-15">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar 
            expanded={sidebarExpanded} 
            toggleSidebar={toggleSidebar} 
          />
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Navbar - Mobile */}
            <div className="lg:hidden">
              <Navbar activePage={activePage} changePage={changePage} />
            </div>
            
            {/* Pages */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 lg:p-8">
              {activePage === 'about' && <About openTestimonialModal={openTestimonialModal} />}
              {activePage === 'resume' && <Resume />}
              {activePage === 'portfolio' && <Portfolio />}
              {activePage === 'blog' && <Blog />}
              {activePage === 'contact' && <Contact />}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar - Desktop */}
      <div className="hidden lg:block fixed top-0 right-0 bg-gray-800 bg-opacity-75 backdrop-blur-md border-l border-b border-gray-700 rounded-bl-2xl z-50">
        <Navbar activePage={activePage} changePage={changePage} />
      </div>

      {/* Testimonial Modal */}
      {activeTestimonial && (
        <TestimonialModal 
          testimonial={activeTestimonial} 
          onClose={closeTestimonialModal} 
        />
      )}
    </div>
  );
}

export default App;