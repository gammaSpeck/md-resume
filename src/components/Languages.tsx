import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'

import SectionHeading from './SectionHeading'
import { RootState } from '../store'

const Languages = () => {
  const { languages } = useSelector((state: RootState) => state.app.resume)

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
