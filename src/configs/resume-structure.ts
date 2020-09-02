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
      company: 'mscripts',
      location: 'Bengaluru, India',
      dateRange: '06/2019 - Ongoing',
      aboutCompany:
        'Healthcare providers in the US use mscripts to communicate digitally with patients about their health.',
      summary: {
        title: 'Responsibilities',
        actions: [
          "Built architectural frameworks in NodeJS and React.js for the company. Frameworks which helps the company's major tech-stack to shift from Java and Angular 1.6 to newer, relevant technologies.",
          'Built micro-services with the serverless framework.',
          'Integrate internally-developed micro-services, as well as marketplace 3rd party modules into our projects.',
          'Admin Console: Designed and built the MVP and launched beta; It is an administrative tool used by each one of our clients and our support teams.',
          'Used Scrum Agile Methodology in my work (Daily Scrum Meetings, Planning Poker, Sprint Backlog, 1on1 meetings.'
        ]
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'mscripts',
      location: 'Bengaluru, India',
      dateRange: '01/2019 - 06/2019'
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
    { group: 'Coding languages', list: ['Javascript', 'Typescript', 'Shell', 'Python'] },
    {
      group: 'Backend',
      list: ['Node', 'Express', 'AWS', 'Serverless', 'Jenkins', 'Kubernetes', 'Terraform', 'MySQL', 'Redis', 'MongoDB']
    },
    {
      group: 'Frontend',
      list: ['React', 'Redux', 'Next JS', 'MUI', 'Bootstrap4', 'SASS', 'Less', 'Webpack4', 'Babel']
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
