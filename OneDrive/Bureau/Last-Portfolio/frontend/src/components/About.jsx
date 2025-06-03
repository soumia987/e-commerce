import TestimonialModal from './common/TestimonialModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Daniel Lewis",
      avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
      text: "Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
      date: "14 June, 2023"
    },
    // Add other testimonials...
  ];

  const services = [
    {
      title: "Web Design",
      icon: "https://i.postimg.cc/4389jZkP/icon-design.png",
      description: "The most modern and high-quality design made at a professional level."
    },
    // Add other services...
  ];

  return (
    <article>
      <header className="mb-8">
        <h2 className="text-2xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-300 after:rounded">
          About me
        </h2>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 mb-4">
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. 
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-gray-300">
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. 
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. 
          My aim is to bring across your message and identity in the most creative way. 
          I created web design for many famous brand companies.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-bold mb-6">What I'm doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </section>

      <TestimonialsSection 
        testimonials={testimonials} 
        onTestimonialClick={(testimonial) => {
          setSelectedTestimonial(testimonial);
          setIsModalOpen(true);
        }} 
      />

      <ClientsSection />

      {isModalOpen && selectedTestimonial && (
        <TestimonialModal 
          testimonial={selectedTestimonial} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </article>
  );
}

function ServiceItem({ title, icon, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-px rounded-xl shadow-md relative z-10">
      <div className="bg-gray-800 p-6 rounded-xl h-full">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-1 rounded-lg">
            <div className="bg-gray-900 p-3 rounded-md">
              <img src={icon} alt={title} className="w-10 h-10" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">{title}</h4>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}