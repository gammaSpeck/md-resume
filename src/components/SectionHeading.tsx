import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    divider: {
      height: theme.spacing(0.5),
      backgroundColor: theme.palette.common.black
    }
  })
)

const SectionHeading = ({ children }: any) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant='h5' gutterBottom className={classes.heading}>
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </>
  )
}

export default SectionHeading
