const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-primary to-cyan-400',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-accent to-pink-400',
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
    color: 'from-purple-500 to-violet-400',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">What I Know</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass rounded-3xl p-6 card-hover"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className={`font-display text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
