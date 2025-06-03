import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 lg:p-6 transition-all duration-500 ${
      isExpanded ? 'max-h-[584px]' : 'max-h-[180px]'
    } overflow-hidden lg:max-h-none lg:w-64 lg:sticky lg:top-16`}>
      <div className="relative flex flex-col lg:items-center gap-4">
        <div className="flex items-center gap-4 lg:flex-col lg:text-center">
          <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-1 rounded-2xl">
            <img 
              src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" 
              alt="avatar" 
              className="w-20 h-20 rounded-xl lg:w-32 lg:h-32"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">Richard Hanrick</h1>
            <p className="text-xs bg-gray-700 text-white px-3 py-1 rounded-lg inline-block">
              Web Developer
            </p>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-0 right-0 bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-lg shadow-md lg:hidden"
        >
          {isExpanded ? 'Hide' : 'Show'} Contacts
        </button>

        <div className={`transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
          <div className="h-px bg-gray-700 my-4"></div>
          
          <ul className="space-y-4">
            <ContactItem icon="mail" title="Email" value="richard@example.com" />
            <ContactItem icon="phone" title="Phone" value="+1 (213) 352-2795" />
            <ContactItem icon="calendar" title="Birthday" value="June 23, 1982" />
            <ContactItem icon="location" title="Location" value="Sacramento, California, USA" />
          </ul>

          <div className="h-px bg-gray-700 my-4"></div>
          
          <div className="flex justify-center gap-4">
            <SocialLink icon="logo-facebook" />
            <SocialLink icon="logo-twitter" />
            <SocialLink icon="logo-instagram" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function ContactItem({ icon, title, value }) {
  return (
    <li className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-1 rounded-lg">
        <div className="bg-gray-800 p-2 rounded-md text-yellow-400">
          <ion-icon name={icon}></ion-icon>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">{title}</p>
        <p className="text-sm">{value}</p>
      </div>
    </li>
  );
}

function SocialLink({ icon }) {
  return (
    <a href="#" className="text-gray-400 hover:text-white text-lg">
      <ion-icon name={icon}></ion-icon>
    </a>
  );
}