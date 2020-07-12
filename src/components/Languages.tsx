import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Resume from '../configs/resume-structure'
import SectionHeading from './SectionHeading'
const { languages } = Resume

const Languages = () => {
  return (
    <div>
      <SectionHeading>Languages</SectionHeading>
      <Grid container spacing={2}>
        {languages.map(({ name, proficiency }) => (
          <Grid item xs={6} key={name}>
            <Typography variant='body1'>
              <strong>{name}</strong> - {proficiency}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Languages
