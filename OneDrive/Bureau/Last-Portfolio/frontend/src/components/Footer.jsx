import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a 
              href="#home" 
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Dev<span className="text-purple-600 dark:text-purple-400">Portfolio</span>
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A passionate developer creating amazing digital experiences with a focus on clean code and elegant design.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Frontend Development', 'Backend Development', 'DevOps Services', 'API Development'].map((service) => (
                <li key={service}>
                  <a 
                    href="#contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Beni-Mellal, 23000</li>
              <li className="text-gray-600 dark:text-gray-400">soumia.iradi2001@example.com</li>
              <li className="text-gray-600 dark:text-gray-400">+ 212 6778899</li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {/* Tu peux laisser les <path> SVG comme dans ton original, ou utiliser des icônes Lucide directement ici */}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Developer Portfolio. Made with 
            <Heart size={16} className="text-red-500 mx-1" /> by Soumia Iradi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
