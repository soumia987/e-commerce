import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home({ activePage }) {
  return (
    <main className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 lg:p-6 mt-4 lg:mt-0">
      {activePage === 'about' && <About />}
      {activePage === 'resume' && <Resume />}
      {activePage === 'portfolio' && <Portfolio />}
      {activePage === 'blog' && <Blog />}
      {activePage === 'contact' && <Contact />}
    </main>
  );
}