import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Divider, makeStyles, Theme, createStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'

import DateRange from './DateRange'
import SectionHeading from './SectionHeading'
import { RootState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallIcon: { fontSize: '1rem' },
    noPadding: { padding: 0 },
    divider: {
      margin: theme.spacing(0, 3)
    },
    grade: {
      wordBreak: 'break-all'
    },
    eduBlock: {
      margin: theme.spacing(0, 0, 1, 0)
    }
  })
)

const Education = () => {
  const classes = useStyles()
  const { education } = useSelector((state: RootState) => state.app.resume)

  return (
    <>
      <SectionHeading>Education</SectionHeading>
      {education.map(({ title, institution, location, dateRange, achievements, grade }) => (
        <Grid container key={title} alignItems='center' justify='space-between' className={classes.eduBlock}>
          <Grid item xs={12}>
            <Typography variant='h6'>{title}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant='body1'>{institution}</Typography>
            <Grid item xs={12} container>
              <DateRange range={dateRange} />
            </Grid>
          </Grid>
          <Divider orientation='vertical' flexItem className={classes.divider} />
          <Grid item xs={5}>
            <Typography variant='caption'>{grade}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default Education
