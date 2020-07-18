const config = () => {
  return {
    resumePublicURL:
      process.env.RESUME_PUBLIC_URL ||
      'https://r1aw.githubusercontent.com/gammaSpeck/md-resume/master/public/resume.json',
    publicURL: process.env.PUBLIC_URL || 'http://localhost:3000'
  }
}
export default config()
