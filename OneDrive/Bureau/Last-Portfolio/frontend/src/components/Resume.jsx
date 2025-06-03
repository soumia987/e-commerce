export default function Resume() {
  const education = [
    {
      title: "University school of the arts",
      period: "2008 - 2010",
      description: "There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing..."
    },
    // Add other education items...
  ];

  const experience = [
    {
      title: "Creative director",
      period: "2015 - Present",
      description: "I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals."
    },
    // Add other experience items...
  ];

  const skills = [
    { name: "Web Design", percentage: 80 },
    { name: "Graphic Design", percentage: 70 },
    // Add other skills...
  ];

  return (
    <article>
      <header className="mb-8">
        <h2 className="text-2xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-300 after:rounded">
          Resume
        </h2>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-1 rounded-lg">
            <div className="bg-gray-900 p-2 rounded-md text-yellow-400">
              <ion-icon name="book-outline"></ion-icon>
            </div>
          </div>
          <h3 className="text-xl font-bold">Education</h3>
        </div>

        <ol className="relative border-l border-gray-700 ml-11">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-1 rounded-lg">
            <div className="bg-gray-900 p-2 rounded-md text-yellow-400">
              <ion-icon name="book-outline"></ion-icon>
            </div>
          </div>
          <h3 className="text-xl font-bold">Experience</h3>
        </div>

        <ol className="relative border-l border-gray-700 ml-11">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-6">My Skills</h3>
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-px rounded-xl">
          <div className="bg-gray-800 p-6 rounded-xl">
            <ul className="space-y-4">
              {skills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

function TimelineItem({ title, period, description }) {
  return (
    <li className="mb-8 ml-6 relative">
      <div className="absolute -left-3.5 top-1.5 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full border-4 border-gray-800"></div>
      <h4 className="text-lg font-medium">{title}</h4>
      <span className="text-sm text-yellow-400">{period}</span>
      <p className="mt-2 text-gray-400">{description}</p>
    </li>
  );
}

function SkillItem({ name, percentage }) {
  return (
    <li>
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-medium">{name}</h5>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </li>
  );
}