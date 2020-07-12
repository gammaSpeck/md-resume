import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme, createStyles, Chip } from '@material-ui/core'

import Resume from '../configs/resume-structure'
import SectionHeading from './SectionHeading'
const { skills } = Resume

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
