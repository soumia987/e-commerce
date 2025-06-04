import { XIcon } from '@heroicons/react/outline';

const TestimonialModal = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 transition-opacity duration-300">
      <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-xl max-w-2xl w-full p-6 animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-700 p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <XIcon className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-xl shadow-md mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <img 
              src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" 
              alt="quote icon" 
              className="w-10 h-10"
            />
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
            <time className="text-sm text-gray-400 mb-4 block">{testimonial.date}</time>
            <p className="text-gray-300">
              {testimonial.quote}
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TestimonialModal;