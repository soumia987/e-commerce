export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { name: 'about', label: 'About' },
    { name: 'resume', label: 'Resume' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'blog', label: 'Blog' },
    { name: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 backdrop-blur-md border-t border-gray-700 rounded-t-xl z-50 lg:static lg:bg-transparent lg:border-0 lg:backdrop-blur-0">
      <ul className="flex justify-center gap-4 lg:gap-8 p-4 lg:p-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActivePage(item.name)}
              className={`px-4 py-2 text-sm lg:text-base transition-colors ${
                activePage === item.name 
                  ? 'text-yellow-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}