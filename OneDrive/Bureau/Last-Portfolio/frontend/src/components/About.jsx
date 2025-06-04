import ServiceItem from './ServiceItem';

const About = ({ openTestimonialModal }) => {
  const services = [
    {
      icon: 'https://i.postimg.cc/4389jZkP/icon-design.png',
      title: 'Web Design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: 'https://i.postimg.cc/ZqgqrqzG/icon-dev.png',
      title: 'Web development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: 'https://i.postimg.cc/xjLdzYxZ/icon-app.png',
      title: 'Mobile apps',
      description: 'Professional development of applications for iOS and Android.'
    },
    
  ];

  const testimonials = [
    {
      id: 1,
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      name: 'manal ',
      date: '14 June, 2023',
      text: 'soumia was hired to create a corporate identity. It\'s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.'
    },
    {
      id: 2,
      avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
      name: 'ibtissam',
      date: '10 May, 2023',
      text: 'Working with soumia has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.'
    },
    {
      id: 3,
      avatar: 'https://i.postimg.cc/fRFWhX9F/avatar-3.png',
      name: 'Ahmed',
      date: '22 April, 2023',
      text: 'I couldn\'t be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.'
    },
   
  ];

  const clients = [
    'https://i.postimg.cc/YqfKyG66/logo-1-color.png',
    'https://i.postimg.cc/fWm6JtgG/logo-2-color.png',
    'https://i.postimg.cc/Bb07xpwd/logo-3-color.png',
    'https://i.postimg.cc/hv1yMmkh/logo-4-color.png',
    'https://i.postimg.cc/ry1P86Dc/logo-5-color.png',
    'https://i.postimg.cc/SsWDN8NV/logo-6-color.png'
  ];

  return (
    <article className="about">
      <header>
        <h2 className="article-title text-2xl font-semibold mb-6">About me</h2>
      </header>

      <section className="about-text mb-8">
        <p className="text-gray-300 mb-4">
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-gray-300">
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <section className="service mb-12">
        <h3 className="service-title text-xl font-semibold mb-6">What I'm doing</h3>

        <ul className="service-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials mb-12">
        <h3 className="testimonials-title text-xl font-semibold mb-6">Testimonials</h3>

        <ul className="testimonials-list flex overflow-x-auto pb-4 -mx-4 px-4 gap-4 scroll-smooth snap-x snap-mandatory">
          {testimonials.map(testimonial => (
            <li 
              key={testimonial.id} 
              className="testimonials-item min-w-full snap-center"
              onClick={() => openTestimonialModal(testimonial)}
            >
              <div className="content-card p-6 pt-12 rounded-xl cursor-pointer">
                <figure className="testimonials-avatar-box absolute top-0 left-0 transform translate-x-4 -translate-y-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl shadow-lg p-1">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 rounded-lg"
                  />
                </figure>

                <h4 className="testimonials-item-title text-lg font-medium mb-2">{testimonial.name}</h4>

                <div className="testimonials-text text-gray-300 line-clamp-4">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="clients-title text-xl font-semibold mb-6">Clients</h3>

        <ul className="clients-list flex overflow-x-auto pb-4 -mx-4 px-4 gap-8">
          {clients.map((client, index) => (
            <li key={index} className="clients-item min-w-[150px]">
              <a href="#">
                <img 
                  src={client} 
                  alt="client logo" 
                  className="w-full h-auto filter grayscale hover:grayscale-0 transition-all"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;