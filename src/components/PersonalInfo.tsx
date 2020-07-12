import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Resume from '../configs/resume-structure'
import EmailIcon from '@material-ui/icons/Email'
import HomeIcon from '@material-ui/icons/Home'
import CallIcon from '@material-ui/icons/Call'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { makeStyles, Theme, createStyles, Avatar } from '@material-ui/core'
import avatar from '../assets/headshot.png'

const {
  personalInfo: { fullName, jobStatus, contact }
} = Resume

const contactIcons = {
  mobile: CallIcon,
  email: EmailIcon,
  address: HomeIcon,
  linkedIn: LinkedInIcon,
  github: GitHubIcon
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    },
    contactInfo: {
      wordBreak: 'break-all'
    },
    smallIcon: { fontSize: '1rem' }
  })
)

type TKeyType = 'mobile' | 'email' | 'address' | 'linkedIn' | 'github'

const renderIcon = (key: TKeyType) => {
  const Icon = contactIcons[key]
  return <Icon color='primary' style={{ fontSize: '1rem', marginRight: '.25rem' }} />
}

const PersonalInfo = () => {
  const classes = useStyles()

  const ContactInfo = Object.entries(contact).map(([k, v]) => (
    <Grid item xs={12} md={6} container className={classes.contactInfo} key={k}>
      {renderIcon(k as TKeyType)}
      <Typography variant='caption' display='inline'>
        {v}
      </Typography>
    </Grid>
  ))

  return (
    <>
      <Box clone order={{ xs: 2, sm: 1 }}>
        <Grid item xs={12} sm={7}>
          <Typography variant='h3' gutterBottom>
            {fullName}
          </Typography>
          <Typography variant='h5' gutterBottom color='primary' style={{ fontWeight: 'bold' }}>
            {jobStatus}
          </Typography>
          <Grid container item xs={12} alignItems='flex-end' spacing={1}>
            {ContactInfo}
          </Grid>
        </Grid>
      </Box>

      <Box clone order={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={5} container justify='center' alignItems='center'>
          <Grid item>
            <Avatar alt='Madhu KM' src={avatar} className={classes.avatar} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PersonalInfo
