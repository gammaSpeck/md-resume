import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'

import DateRange from './DateRange'
import SectionHeading from './SectionHeading'
import { RootState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    noPadding: { padding: 0 },
    projBlock: {
      margin: theme.spacing(0, 0, 1, 0)
    }
  })
)

const Projects = () => {
  const classes = useStyles()
  const { projects } = useSelector((state: RootState) => state.app.resume)

  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <Grid container>
        {projects.map(({ title, dateRange, location, summary }) => (
          <Grid container key={title} className={classes.projBlock}>
            <Grid item>
              <Typography variant='h6'>{title}</Typography>
            </Grid>
            <Grid item xs={12} container>
              <DateRange range={dateRange} location={location} />
            </Grid>
            <Grid item xs={12} container alignItems='center'>
              <Typography variant='body1'>{summary}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Projects
