const config = () => {
  return {
    resumePublicURL:
      process.env.RESUME_PUBLIC_URL ||
      'https://raw.githubusercontent.com/gammaSpeck/md-resume/master/public/resume.json'
  }
}
export default config()
