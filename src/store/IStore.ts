export interface IEducation {
  title: string
  institution: string
  location: string
  dateRange: string
  achievements: string[]
  grade: string
}

export interface IExperience {
  title: string
  company: string
  location: string
  dateRange: string
  aboutCompany: string
  summary: {
    title: string
    actions: string[]
  }
}

export interface ILanguage {
  name: string
  proficiency: string
}

export interface IProject {
  title: string
  dateRange: string
  location: string
  summary: string
}

export interface IPersonalInfo {
  fullName: string
  jobStatus: string
  avatarPic: string
  contact: {
    mobile: string
    email: string
    address: string
    github: string
    linkedIn: string
  }
}

export interface ISkill {
  group: string
  list: string[]
}

export interface IResume {
  personalInfo: IPersonalInfo
  education: IEducation[]
  experiences: IExperience[]
  languages: ILanguage[]
  projects: IProject[]
  skills: ISkill[]
}

export interface IInitialState {
  isLoading: boolean
  resume: IResume
}
