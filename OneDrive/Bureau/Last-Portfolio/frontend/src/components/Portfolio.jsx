import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSelectList, setShowSelectList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'applications', label: 'Applications' },
    { id: 'web-development', label: 'Web Development' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Finance',
      category: 'web-development',
      image: 'https://i.postimg.cc/qRHpHMyd/project-1.jpg'
    },
    {
      id: 2,
      title: 'Orizon',
      category: 'web-development',
      image: 'https://i.postimg.cc/bNrcM2Wt/project-2.png'
    },
    {
      id: 3,
      title: 'Fundo',
      category: 'web-design',
      image: 'https://i.postimg.cc/jSJVqYsq/project-3.jpg'
    },
    {
      id: 4,
      title: 'Brawlhalla',
      category: 'applications',
      image: 'https://i.postimg.cc/dtpXxNGb/project-4.png'
    },
    {
      id: 5,
      title: 'DSM.',
      category: 'web-design',
      image: 'https://i.postimg.cc/43T0JKLw/project-5.png'
    },
    {
      id: 6,
      title: 'Metaspark',
      category: 'web-design',
      image: 'https://i.postimg.cc/qR1DX1kZ/project-6.png'
    },
    {
      id: 7,
      title: 'Summary',
      category: 'web-development',
      image: 'https://i.postimg.cc/Kj4q9tjc/project-7.png'
    },
    {
      id: 8,
      title: 'Task Manager',
      category: 'applications',
      image: 'https://i.postimg.cc/rw2j4B1w/project-8.jpg'
    },
    {
      id: 9,
      title: 'Arrival',
      category: 'web-development',
      image: 'https://i.postimg.cc/7LxNsSQv/project-9.png'
    }
  ];

  const toggleSelectList = () => {
    setShowSelectList(!showSelectList);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setActiveFilter(category.toLowerCase().replace(' ', '-'));
    setShowSelectList(false);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <article className="portfolio">
      <header>
        <h2 className="article-title text-2xl font-semibold mb-8">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop Filters - Hidden on mobile */}
        <ul className="filter-list hidden md:flex gap-6 mb-8">
          {filters.map(filter => (
            <li key={filter.id} className="filter-item">
              <button 
                onClick={() => setActiveFilter(filter.id)}
                className={`text-sm ${activeFilter === filter.id ? 'text-amber-300' : 'text-gray-300 hover:text-white'}`}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Filter Select - Hidden on desktop */}
        <div className="filter-select-box md:hidden relative mb-8">
          <button 
            className="filter-select bg-gray-800 text-gray-300 flex justify-between items-center w-full p-3 border border-gray-700 rounded-xl"
            onClick={toggleSelectList}
          >
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down" className={`transition-transform ${showSelectList ? 'rotate-180' : ''}`}></ion-icon>
            </div>
          </button>

          {showSelectList && (
            <ul className="select-list absolute top-full mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl z-10 shadow-lg">
              {filters.map(filter => (
                <li key={filter.id} className="select-item">
                  <button 
                    onClick={() => selectCategory(filter.label)}
                    className="w-full text-left p-3 hover:bg-gray-700 rounded-lg"
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filter-select-box"></div>

        <ul className="project-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <li 
              key={project.id} 
              className="project-item active"
              data-category={project.category}
            >
              <a href="#" className="block group">
                <figure className="project-img relative h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  
                  <div className="project-item-icon-box absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-amber-300 p-4 rounded-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                </figure>

                <h3 className="project-title text-gray-100 font-medium">{project.title}</h3>
                <p className="project-category text-gray-400 text-sm capitalize">
                  {project.category.replace('-', ' ')}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;