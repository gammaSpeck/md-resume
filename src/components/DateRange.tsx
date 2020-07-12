import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import LocationOnIcon from '@material-ui/icons/LocationOn'

interface IDateRange {
  range: string
  location?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallIcon: { fontSize: '1rem' }
  })
)

const DateRange = ({ range, location }: IDateRange) => {
  const classes = useStyles()

  return (
    <>
      <DateRangeIcon color='primary' className={classes.smallIcon} />
      <Typography variant='caption' display='inline'>
        {range}
      </Typography>
      {!!location && (
        <>
          &nbsp; &nbsp;
          <LocationOnIcon color='primary' className={classes.smallIcon} />
          <Typography variant='caption' display='inline'>
            {location}
          </Typography>
        </>
      )}
    </>
  )
}

export default DateRange
