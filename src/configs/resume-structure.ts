export default {
  personalInfo: {
    fullName: 'Madhusoodhanan KM',
    jobStatus: 'Full Stack Developer', // Can also be the post you are looking for
    avatarPic: 'URL',
    contact: {
      mobile: '+91-9738575801',
      email: 'madhukm3141@gmail.com',
      address: 'Bengaluru, Karnataka, India',
      github: 'https://github.com/gammaSpeck',
      linkedIn: 'https://linkedin.com/in/madhusoodhanan-km'
    }
  },
  experiences: [
    {
      title: 'Associate Software Engineer',
      company: 'mscripts, a Cardinal Health Company',
      location: 'Bengaluru, India',
      dateRange: '06/2019 - Ongoing',
      aboutCompany:
        'Healthcare providers in the US use mscripts to communicate digitally with patients about their health.',
      summary: {
        title: 'Responsibilities',
        actions: [
          'Built architectural frameworks in NodeJS and React.js for the company.',
          "Architected a project from the ground up upto the k8s deployment, and mentored the team in the project's entire SDLC.",
          'Admin Console: Designed and built the MVP and launched beta; It is an administrative tool used by each one of our clients and our support teams.',
          // 'Used Scrum Agile Methodology in my work (Daily Scrum Meetings, Planning Poker, Sprint Backlog, 1on1 meetings.',
          'Component Owner for multiple components in the company.',
          'Technical interviewer for campus recruitment.'
        ]
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'mscripts',
      location: 'Bengaluru, India',
      dateRange: '01/2019 - 06/2019',
      summary: {
        title: '',
        actions: [
          'Built micro-services using the serverless framework.',
          'Built shared repository of common reusable modules.'
        ]
      }
    }
  ],
  education: [
    {
      title: 'Bachelors in CS Engineering',
      institution: 'CMRIT',
      location: 'Bengaluru, India',
      dateRange: '2015-2019',
      achievements: ['', ''],
      grade: '7.3 / 10' // CGPA
    },
    {
      title: 'PUC - PCMB',
      institution: 'Christ Junior College',
      location: 'Bengaluru, India',
      dateRange: '2013-2015',
      achievements: [],
      grade: '84%'
    },
    {
      title: 'Secondary Education',
      institution: 'St Thomas Public School',
      location: 'Bengaluru, India',
      dateRange: '2015',
      achievements: [],
      grade: '92%'
    }
  ],
  projects: [
    {
      title: 'Intelligent Intrusion Alerting',
      dateRange: '03/2018',
      location: 'Coimbatore, India', // Optional
      summary: 'A smart system that photographs, identifies and alerts using ML and Image Processing.'
    },
    {
      title: 'IoT Railway Gate Control',
      dateRange: '02/2017',
      location: 'Udaipur, India', // Optional
      summary:
        'A multi-tier IoT system that senses train movements, and automatically closes the railway crossing gate.'
    }
  ],
  skills: [
    { group: 'Coding languages', list: ['Javascript', 'Typescript', 'HTML/CSS', 'Shell', 'Python'] },
    {
      group: 'Backend',
      list: [
        'NodeJS',
        'Express',
        'AWS',
        'Serverless',
        'Jenkins',
        'Kubernetes',
        'Terraform',
        'Redis',
        'MySQL',
        'MongoDB'
      ]
    },
    {
      group: 'Frontend',
      list: ['React', 'Redux', 'NextJS', 'Gatsby', 'MUI', 'Bootstrap', 'SASS', 'Less', 'Webpack4', 'Babel']
    },
    {
      group: 'Testing frameworks',
      list: ['Jest', 'Mocha', 'Swagger.io', 'Postman']
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Advanced' },
    { name: 'Hindi', proficiency: 'Proficient' },
    { name: 'Tamil', proficiency: 'Intermediate' },
    { name: 'Malayalam', proficiency: 'Intermediate' }
  ],
  socialProfiles: [{ name: 'GitHub', link: 'https://github.com/gammaSpeck' }]
}
