const Navbar = ({ activePage, changePage }) => {
  const pages = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gray-800 bg-opacity-75 backdrop-blur-md border border-gray-700 rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tr-none shadow-lg">
      <ul className="navbar-list flex flex-wrap justify-center gap-1 lg:gap-4 p-2 lg:p-4">
        {pages.map(page => (
          <li key={page.id} className="navbar-item">
            <button 
              onClick={() => changePage(page.id)}
              className={`navbar-link px-4 py-3 text-sm lg:text-base transition-colors ${activePage === page.id ? 'text-amber-300' : 'text-gray-300 hover:text-gray-100'}`}
            >
              {page.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;