import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme, createStyles, Box, Fab } from '@material-ui/core'
import PersonalInfo from './PersonalInfo'
import Projects from './Projects'
import Experiences from './Experiences'
import Education from './Education'
import Skills from './Skills'
import Languages from './Languages'
import GetAppIcon from '@material-ui/icons/GetApp'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      backgroundColor: 'lightgrey'
    },
    container: {
      backgroundColor: theme.palette.background.paper,
      borderStyle: 'solid',
      borderWidth: theme.spacing(0.1),
      padding: '3rem',
      [theme.breakpoints.down('sm')]: {
        padding: '2rem'
      },
      [theme.breakpoints.down('xs')]: {
        padding: '1rem'
      }
    },
    fab: {
      margin: theme.spacing(2),
      position: 'relative',
      float: 'right',
      top: '50%'
    }
  })
)

const App = () => {
  const classes = useStyles()
  const fileUrl = `${process.env.PUBLIC_URL}/madhu_km.pdf`

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Fab color='primary' aria-label='download' className={classes.fab} href={fileUrl} download>
        <GetAppIcon />
      </Fab>
      <Container maxWidth='md' className={classes.container}>
        <Grid container justify='space-between' spacing={3} style={{ marginBottom: '1rem' }}>
          <PersonalInfo />
        </Grid>
        <Grid container justify='space-between' spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box component='span' m={1} p={1}>
              <Grid container direction='column' spacing={3}>
                <Grid item xs={12}>
                  <Experiences />
                </Grid>
                <Grid item xs={12}>
                  <Education />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component='span' m={1} p={1}>
              <Grid container direction='column' spacing={3}>
                <Grid item>
                  <Projects />
                </Grid>
                <Grid item>
                  <Skills />
                </Grid>
                <Grid item>
                  <Languages />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
