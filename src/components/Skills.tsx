import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme, createStyles, Chip } from '@material-ui/core'
import { useSelector } from 'react-redux'

import SectionHeading from './SectionHeading'
import { RootState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipRoot: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
)

const Skills = () => {
  const classes = useStyles()
  const { skills } = useSelector((state: RootState) => state.app.resume)

  return (
    <div>
      <SectionHeading>Skills</SectionHeading>
      <Grid container direction='column' spacing={1}>
        {skills.map((skill) => (
          <Grid item key={skill.group}>
            <Typography variant='h6' color='primary'>
              {skill.group}
            </Typography>
            <div className={classes.chipRoot}>
              {skill.list.map((item) => (
                <Chip onClick={() => null} label={item} key={item} />
              ))}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Skills
