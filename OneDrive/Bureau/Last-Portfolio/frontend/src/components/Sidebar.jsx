import { useState } from 'react';

const Sidebar = ({ expanded, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 transition-all duration-500 ${expanded ? 'max-h-[584px]' : 'max-h-[180px]'} overflow-hidden lg:max-h-full lg:sticky lg:top-15 lg:w-1/4`}>
      <div className="sidebar-info flex flex-col items-center gap-6">
        {/* Avatar */}
        <div className="avatar-box bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-2 shadow-lg">
          <img 
            src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" 
            alt="Richard Hanrick" 
            className="w-32 rounded-2xl"
          />
        </div>

        {/* Info */}
        <div className="info-content text-center">
          <h1 className="text-2xl font-medium mb-3">Richard Hanrick</h1>
          <p className="text-sm bg-gray-700 text-white px-3 py-1 rounded-lg inline-block">Web Developer</p>
        </div>

        {/* Toggle Button - Mobile */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 bg-gradient-to-br from-gray-600 to-gray-800 text-amber-300 px-3 py-2 rounded-lg shadow-md transition-all hover:bg-gradient-to-br hover:from-amber-400 hover:to-amber-500 hover:text-gray-900"
        >
          {expanded ? 'Hide Contacts' : 'Show Contacts'}
        </button>
      </div>

      {/* Expanded Content */}
      <div className={`sidebar-info-more mt-6 ${expanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
        <div className="separator h-px bg-gray-700 my-6"></div>

        {/* Contact List */}
        <ul className="contacts-list grid grid-cols-1 gap-5">
          <li className="contact-item flex items-center gap-4">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-xs text-gray-400 uppercase">Email</p>
              <a href="mailto:richard@example.com" className="text-sm hover:text-amber-300 transition-colors">richard@example.com</a>
            </div>
          </li>

          <li className="contact-item flex items-center gap-4">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-xs text-gray-400 uppercase">Phone</p>
              <a href="tel:+12133522795" className="text-sm hover:text-amber-300 transition-colors">+1 (213) 352-2795</a>
            </div>
          </li>

          <li className="contact-item flex items-center gap-4">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-xs text-gray-400 uppercase">Birthday</p>
              <time className="text-sm">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item flex items-center gap-4">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-xs text-gray-400 uppercase">Location</p>
              <address className="text-sm not-italic">Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator h-px bg-gray-700 my-6"></div>

        {/* Social Links */}
        <ul className="social-list flex justify-center gap-4">
          <li className="social-item">
            <a href="#" className="social-link text-gray-400 hover:text-amber-300 transition-colors">
              <ion-icon name="logo-facebook" className="text-xl"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link text-gray-400 hover:text-amber-300 transition-colors">
              <ion-icon name="logo-twitter" className="text-xl"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link text-gray-400 hover:text-amber-300 transition-colors">
              <ion-icon name="logo-instagram" className="text-xl"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;