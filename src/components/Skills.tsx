const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Docker', level: 55 },
      { name: 'Linux', level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">What I Know</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            My Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft card-hover"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">Also familiar with:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'GraphQL', 'Firebase', 'AWS', 'Agile', 'CI/CD', 'Testing', 'UI/UX'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
